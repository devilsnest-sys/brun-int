import { IProducts } from ".";

export type TSortPrice = "asc" | "desc" | null;

export type TPaginationLimit = 10 | 15 | 20 | 25;

interface ProductCategory {
  id: string;
  category_name: string;
}

interface ProductSubCategory {
  id: string;
  subcategory_name: string;
  category_id: string;
}

export interface IGetProductCategoriesResponse {
  statusCode: number;
  data: ProductCategory[];
  message: string;
  success: boolean;
}

export interface IGetProductSubCategoriesResponse {
  statusCode: number;
  data: ProductSubCategory[];
  message: string;
  success: boolean;
}

export interface IProductListingCategoryList {
  id: string;
  category_name: string;
  isSubCategory?: boolean;
}

export interface IAdminProductListingInitialState {
  searchQuery: string | null;
  isSearcheResultsLoading: boolean;
  searchResults: IProducts[];
  isSearchError: boolean;
  isEditAllOpen: boolean;
  categoryFilter: string | null;
  colorFilters: string | null;
  sortByPrice: TSortPrice;
  selectedProductIds: string[];
  products: IProducts[];
  limit: TPaginationLimit;
  page: number;
  categoryList: IProductListingCategoryList[];
}

export interface IUrlParams {
  [key: string]: string | number | boolean;
}
