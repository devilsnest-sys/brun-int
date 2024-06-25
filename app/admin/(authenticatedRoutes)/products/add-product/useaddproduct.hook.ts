"use client";
import axios from "axios";
import toast from "react-hot-toast";
import { RootState } from "@libs/store";
import { EndpointService, addProductAPI, addProductImagesAPI, completeTheLookAPI } from "@services";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import network from "@services/network/network.service";
import { setIsLoadingFullScreenLoader } from "@libs/features/admin/adminAuth.slice";
import {
  setCategories,
  setCompleteTheLookRecommendations,
  setSubCategories,
} from "@libs/features/admin/addproduct.slice";
import {
  EProductHomepageFlags,
  IAddProductValues,
  ICompleteTheLookRecommendation,
  IProductImage,
  IProducts,
  IRestOfTheFields,
} from "@modals/admin";
import { EProductSizeEnum } from "@modals/productListing/productListing.types";

export const useAddProduct = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isSubCategoryLoading, setIsSubCategoryLoading] = useState(false);
  const { isLoadingFullScreenLoader } = useSelector(
    (state: RootState) => state.adminAuth
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    selectedCategory,
    selectedSubCategory,
    sizes,
    homepageProduct,
    completeTheLook,
    productDefaultImage,
    productImageOne,
    productImageTwo,
    productImageThree,
    productImageFour,
  } = useSelector((state: RootState) => state.adminAddProductSlice);

  const handleGetSubCategories = async (categoryId: string) => {
    setIsSubCategoryLoading(true);
    try {
      const subCategoriesRes = await network.get(
        EndpointService.getSubCategoriesOfCategory + categoryId
      );
      console.log("subCategories response", subCategoriesRes);
      const subCategories = subCategoriesRes.data.data;
      dispatch(setSubCategories(subCategories));
      setIsSubCategoryLoading(false);
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.log("get all categories error", error);
        toast.error("Session expired, please login again");
        router.replace("/admin/login");
      } else {
        console.log("get all categories cancelled", error);
      }
      setIsSubCategoryLoading(false);
    }
  };

  const handleGetAllProducts = async (abortController: AbortController) => {
    try {
      const response = await network.get(EndpointService.getAllProducts, {
        signal: abortController.signal,
      });
      const products = response.data.data as IProducts[];
      // modify the response to match the complete the look recommendation
      const newProducts = products.map((product) => {
        const bannerImage = product.image.find((image: IProductImage) => image.is_banner);
        return {
          id: product.id,
          product_name: product.name,
          image: bannerImage,
        };
      });
      dispatch(setCompleteTheLookRecommendations(newProducts));
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.log("get all products error", error);
        toast.error("Session expired, please login again");
        router.replace("/admin/login");
      } else {
        console.log("get all products cancelled", error);
      }
    }
  };

  const handleAddProduct = async (
    values: IAddProductValues,
    restOfTheFields: IRestOfTheFields
  ) => {
    try {
      setIsSubmitting(true);
      const productDetailsPayload = {
        name: values.productName,
        description: values.productDescription,
        slug: values.slugText,
        price: values.productSellPrice,
        discount: values.productDiscount,
        colours: values.productColorName,
        hexcode: values.productColorCode,
        meta_title: values.metaTitle,
        meta_description: values.metaDescription,
        category_id: restOfTheFields.selectedCategory,
        subcategory_id: restOfTheFields.selectedSubCategory,
        size_and_quantity: [] as {
          size: EProductSizeEnum;
          quantity: number;
          sku: string;
        }[],
        is_published: false,
        is_featured: false,
        is_gift_for_you: false,
        is_top_picks: false,
        is_trending: false,
        is_new_arrivals: false,
        is_iconic_essential: false,
      };

      // map the sizes and quantity to the payload
      productDetailsPayload.size_and_quantity = restOfTheFields.sizes.map(
        (size) => {
          return {
            size: size.size,
            quantity: +size.quantity,
            sku: size.sku,
          };
        }
      );

      // map the homepage flags to the payload
      Object.values(EProductHomepageFlags).forEach((item) => {
        if (
          restOfTheFields.homepageProduct.find(
            (product) => product.value === item
          )
        ) {
          productDetailsPayload[item] = true;
        }
      });

      // validate the payload
      if (
        !productDetailsPayload.name ||
        !productDetailsPayload.description ||
        !productDetailsPayload.slug ||
        !productDetailsPayload.price ||
        !productDetailsPayload.discount ||
        !productDetailsPayload.colours ||
        !productDetailsPayload.hexcode ||
        !productDetailsPayload.meta_title ||
        !productDetailsPayload.meta_description ||
        !productDetailsPayload.category_id ||
        !productDetailsPayload.subcategory_id ||
        !productDetailsPayload.size_and_quantity.length ||
        !restOfTheFields.productDefaultImage ||
        !restOfTheFields.productImageOne ||
        !restOfTheFields.productImageTwo ||
        !restOfTheFields.productImageThree ||
        !restOfTheFields.productImageFour ||
        !restOfTheFields.completeTheLook.id
      ) {
        toast.error("Please fill all the required fields");
        setIsSubmitting(false);
        return;
      }
      const response = await addProductAPI(productDetailsPayload);
      const productId = response?.data?.id;

      const imagesPayload = [restOfTheFields.productImageOne, restOfTheFields.productImageTwo, restOfTheFields.productImageThree, restOfTheFields.productImageFour];
      await addProductImagesAPI(productId, restOfTheFields.productDefaultImage, imagesPayload);

      const completeTheLookPayload = {
        product1_id: productId,
        product2_id: restOfTheFields.completeTheLook.id,
      };
      const completeTheLookResponse = await completeTheLookAPI(completeTheLookPayload);
      if(completeTheLookResponse?.statusCode === 201) {
        toast.success("Product added successfully");
        setIsSubmitting(false);
        window.location.reload();
      }
    } catch (error) {
      setIsSubmitting(false);
      if (!axios.isCancel(error)) {
        console.log("error while adding product", error);
        toast.error("Session expired, please login again");
        router.replace("/admin/login");
      } else {
        console.log("error while adding product", error);
      }
    }
  };

  useEffect(() => {
    const handleGetAllData = async (abortController: AbortController) => {
      dispatch(setIsLoadingFullScreenLoader(true));
      try {
        const isAdminLoggedIn = await network.get(
          EndpointService.isAdminLoggedIn,
          {
            signal: abortController.signal,
          }
        );
        if (isAdminLoggedIn.data.statusCode === 200) {
          const response = await network.get(EndpointService.getAllCategories, {
            signal: abortController.signal,
          });
          const categories = response.data.data;
          dispatch(setCategories(categories));
          handleGetAllProducts(abortController);
          dispatch(setIsLoadingFullScreenLoader(false));
        } else {
          toast.error("Something went wrong, please login again");
          router.replace("/admin/login");
        }
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.log("admin authorization failed", error);
          toast.error("Admin authentication failed, please login again");
          router.replace("/admin/login");
        } else {
          console.log("admin authorization cancelled by abort AbortController", error);
        }
      }
    };

    const abortController = new AbortController();
    handleGetAllData(abortController);

    return () => {
      abortController.abort();
    };
  }, []);

  return {
    handleAddProduct,
    restOfTheFields: {
      selectedCategory,
      selectedSubCategory,
      sizes,
      homepageProduct,
      completeTheLook,
      productDefaultImage,
      productImageOne,
      productImageTwo,
      productImageThree,
      productImageFour,
    },
    isSubmitting,
    isLoadingFullScreenLoader,
    isSubCategoryLoading,
    handleGetSubCategories,
  };
};
