import {
  EProductListingLayoutEnum,
  EProductSizeEnum,
  IProductListing,
} from "@modals/productListing/productListing.types";

export interface IProductSearchState {
  isLoading: boolean;
  isError: boolean;
  searchLayout:
    | EProductListingLayoutEnum.ONE_COLUMN
    | EProductListingLayoutEnum.TWO_COLUMN
    | EProductListingLayoutEnum.FIVE_COLUMN;
  searchQuery: string | null;
  searchResults: IProductListing[];
  SearchColorFilter: string | null;
  SearchSizeFilter: EProductSizeEnum | null;
  SearchPriceFilter: [number, number];
}
