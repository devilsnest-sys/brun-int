import { IGetProductCategoriesResponse, IGetProductSubCategoriesResponse, IUrlParams } from "@modals/admin";
import { EndpointService } from "@services";
import network from "@services/network/network.service";

const buildUrl = (baseUrl: string, additionalParams = {}) => {
  let url = baseUrl;

  // Check if there are any additional parameters
  if (Object.keys(additionalParams).length > 0) {
    const urlSearchParams = new URLSearchParams(additionalParams);
    url += `?${urlSearchParams.toString()}`;
  }

  return url;
};

export const getProductListingAPI = async (
  abortController: AbortController,
  params: IUrlParams = {}
) => {
  try {
    const response = await network.get(
      buildUrl(EndpointService.getAllProducts, params),
      {
        signal: abortController.signal,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllCategoriesAPI = async (abortController: AbortController) => {
  try {
    const response = await network.get(EndpointService.getCategoryList, {
      signal: abortController.signal,
    });
    return response.data as IGetProductCategoriesResponse;
  } catch (error) {
    throw error;
  }
};

export const getAllSubCategoriesAPI = async (abortController: AbortController) => {
  try {
    const response = await network.get(EndpointService.getSubCategoriesList,
      {
        signal: abortController.signal,
      }
    );
    return response.data as IGetProductSubCategoriesResponse;
  } catch (error) {
    throw error;
  }
}