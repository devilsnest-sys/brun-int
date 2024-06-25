import * as yup from "yup";
import { EndpointService } from "@services";
import network from "@services/network/network.service";

export const addProductValidationSchema = yup.object({
  slugText: yup.string().required("Required"),
  metaTitle: yup.string().required("Required"),
  metaDescription: yup.string().required("Required"),
  productName: yup.string().required("Required"),
  productDescription: yup.string().required("Required"),
  productColorName: yup.string().required("Required"),
  productColorCode: yup.string().required("Required"),
  productSellPrice: yup.string().required("Required"),
  productDiscount: yup.string().required("Required"),
});

export const addProductAPI = async (productDetailsPayload: any) => {
  try {
    const response = await network.post(
      EndpointService.addProduct,
      productDetailsPayload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addProductImagesAPI = async (
  productId: string,
  productBannerImage: File,
  productImagesPayload: File[]
) => {
  try {
    // call api for banner image with product id and product_image as form data
    const bannerImageFormData = new FormData();
    bannerImageFormData.append("product_id", productId);
    bannerImageFormData.append("product_image", productBannerImage);
    const responseBannerImage = await network.post(
      EndpointService.addProductImages,
      bannerImageFormData,
      {
        headers: { "Content-Type": "multipart/form-data" }, // Set appropriate header
      }
    );
    if (responseBannerImage?.data?.statusCode === 200) {
      const formData = new FormData();
      formData.append("product_id", productId);
      productImagesPayload.forEach((image) => {
        formData.append("product_image", image);
      });
      const response = await network.post(
        EndpointService.addProductImages,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" }, // Set appropriate header
        }
      );
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

export const completeTheLookAPI = async (completeTheLookPayload: any) => {
  try {
    const response = await network.post(
      EndpointService.completeTheLook,
      completeTheLookPayload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
