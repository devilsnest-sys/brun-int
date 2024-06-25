import { PRICERANGE, products } from "@contants/product.constant";
import {
  EProductListingLayoutEnum,
  EProductSizeEnum,
} from "@modals/productListing/productListing.types";
import { IProductSearchState } from "@modals/productSearch/productSearch.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IProductSearchState = {
  isLoading: false,
  isError: false,
  searchLayout: EProductListingLayoutEnum.FIVE_COLUMN,
  searchQuery: null,
  searchResults: [],
  SearchColorFilter: null,
  SearchSizeFilter: null,
  SearchPriceFilter: PRICERANGE,
};

const productSearchSlice = createSlice({
  name: "productSearch",
  initialState: initialState,
  reducers: {
    setSearchLayout: (
      state,
      action: PayloadAction<
        | EProductListingLayoutEnum.ONE_COLUMN
        | EProductListingLayoutEnum.TWO_COLUMN
        | EProductListingLayoutEnum.FIVE_COLUMN
      >
    ) => {
      state.searchLayout = action.payload;
    },
    searchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSearchColorFilter: (state, action: PayloadAction<string | null>) => {
      state.SearchColorFilter = action.payload;
    },
    setSearchSizeFilter: (state, action: PayloadAction<EProductSizeEnum | null>) => {
      state.SearchSizeFilter = action.payload;
    },
    setSearchPriceFilter: (state, action: PayloadAction<[number, number]>) => {
      state.SearchPriceFilter = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
  },
});

export const {
  searchQuery,
  setSearchLayout,
  setSearchColorFilter,
  setSearchSizeFilter,
  setSearchPriceFilter,
} = productSearchSlice.actions;

export default productSearchSlice.reducer;
