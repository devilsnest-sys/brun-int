import { PRICERANGE, products } from "@contants/product.constant";
import {
  IProductListingState,
  EProductCategoryEnum,
  EProductListingLayoutEnum,
  EProductSizeEnum,
} from "@modals/productListing/productListing.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IProductListingState = {
  productListing: products,
  layout: EProductListingLayoutEnum.TWO_COLUMN,
  categorySelected: EProductCategoryEnum.ALL_PRODUCTS,
  productListingSizeFilter: null,
  productListingColorFilter: null,
  productListingPriceFilter: PRICERANGE,
};

const productListingSlice = createSlice({
  name: "productListing",
  initialState: initialState,
  reducers: {
    setLayout: (state, action: PayloadAction<EProductListingLayoutEnum.ONE_COLUMN | EProductListingLayoutEnum.TWO_COLUMN | EProductListingLayoutEnum.FIVE_COLUMN>) => {
      state.layout = action.payload;
    },
    setProductCategory: (state, action: PayloadAction<EProductCategoryEnum>) => {
      state.categorySelected = action.payload;
    },
    setProductListingSizeSelected: (state, action: PayloadAction<EProductSizeEnum | null>) => {
      state.productListingSizeFilter = action.payload;
    },
    setProductListingColorSelected: (state, action: PayloadAction<string | null>) => {
      state.productListingColorFilter = action.payload;
    },
    setProductListingPriceSelected: (state, action: PayloadAction<[number, number]>) => {
      state.productListingPriceFilter = action.payload;
    },
  },
});

export const { setLayout, setProductCategory, setProductListingSizeSelected, setProductListingColorSelected, setProductListingPriceSelected } = productListingSlice.actions;

export default productListingSlice.reducer;
