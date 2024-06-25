import { setIsLoadingFullScreenLoader } from "@libs/features/admin/adminAuth.slice";
import { setAdminCategoryList, setProducts } from "@libs/features/admin/adminProductListing.slice";
import { RootState } from "@libs/store";
import { IUrlParams, TPaginationLimit, TSortPrice } from "@modals/admin";
import { EndpointService, getAllCategoriesAPI, getAllSubCategoriesAPI, getProductListingAPI } from "@services";
import network from "@services/network/network.service";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

// TODO: set the product listing data in redux store and add color filter, price sorting logic

export const useAdminProductListing = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const isLoadingFullScreenLoader = useSelector(
    (state: RootState) => state.adminAuth.isLoadingFullScreenLoader
  );
  const categoryList = useSelector((state: RootState) => state.adminProductListing.categoryList);
  const {searchQuery, categoryFilter,colorFilters, sortByPrice, limit, page} = useSelector((state: RootState) => state.adminProductListing)


  const getProductListingData = async (abortController: AbortController, searchQuery: string| null, categoryFilter: string | null, colorFilters: string | null, sortByPrice: TSortPrice, limit: TPaginationLimit, page: number) => {
    try {
        // if search query is empty, then don't send search query in params
        const params: IUrlParams = {}
        if(searchQuery) params['search'] = searchQuery;
        if(limit) params['pageSize'] = limit;
        if(page) params['page'] = page;

        const response = await getProductListingAPI(abortController, params);
        // console.log("admin product listings ",response)
        // dispatch(setProducts(response.data));
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.log("get product listing error", error);
        toast.error("Session expired, please login again");
        router.replace("/admin/login");
      } else {
        console.log("get product listing cancelled", error);
      }
    }

  };

  const getAllCategories = async (abortController: AbortController) => {
    try {
      const response = await getAllCategoriesAPI(abortController);
      dispatch(setAdminCategoryList(response.data));
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.log("get all categories error", error);
        toast.error("Session expired, please login again");
        router.replace("/admin/login");
      } else {
        console.log("get all categories cancelled", error);
      }
    }
  }

  const getAllSubCategories = async (abortController: AbortController) => {
    try {
      const response = await getAllSubCategoriesAPI(abortController);
      const payload = response.data.map((subCategory) => ({ id: subCategory.id, category_name: subCategory.subcategory_name }));
      dispatch(setAdminCategoryList([...categoryList, ...payload]));
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.log("get all sub-categories error", error);
        toast.error("Session expired, please login again");
        router.replace("/admin/login");
      } else {
        console.log("get all sub-categories cancelled", error);
      }
    }
  }

  const authenticateAdmin = async (abortController: AbortController) => {
    dispatch(setIsLoadingFullScreenLoader(true));
    try {
      const isAdminLoggedIn = await network.get(
        EndpointService.isAdminLoggedIn,
        {
          signal: abortController.signal,
        }
      );
      if (isAdminLoggedIn.data.statusCode !== 200) {
        toast.error("Something went wrong, please login again");
        router.replace("/admin/login");
      }
      setAuthenticated(true);
      dispatch(setIsLoadingFullScreenLoader(false));
      getAllCategories(abortController);
      getAllSubCategories(abortController);
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.log("admin authorization failed", error);
        toast.error("Admin authentication failed, please login again");
        router.replace("/admin/login");
      } else {
        // console.log(
        //   "admin authorization cancelled by abort AbortController",
        //   error
        // );
      }
    }
  };

  // get product listing data based on search query, category filter, color filters, sort by price, limit and page
  useEffect(() => {
    const abortController = new AbortController();
    if (!authenticated) return;

    // console.log("fetching product listing data", searchQuery);
    getProductListingData(abortController, searchQuery, categoryFilter, colorFilters, sortByPrice, limit, page);

    return () => {
      abortController.abort();
    };
  }, [categoryFilter, colorFilters, limit, page, searchQuery, sortByPrice, authenticated]);
  
  // authenticaion check
  useEffect(() => {  
      const abortController = new AbortController();
      authenticateAdmin(abortController);
    return () => {
      abortController.abort();
    };
  }, []);

  return {
    isLoadingFullScreenLoader,
  };
};
