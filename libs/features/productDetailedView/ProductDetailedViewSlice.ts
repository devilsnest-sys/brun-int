import { IProductDetailedViewState, IProductDetails } from "@modals/productDetailedView/productDetailedView.types";
import { IProductListing } from "@modals/productListing/productListing.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState : IProductDetailedViewState = {
  productDetails: {
    id: "",
    name: "",
    slug: "",
    stock: 0,
    price: 0,
    discount: 0,
    colours: [],
    sizes: [],
    description: "",
    is_published: false,
    out_of_stock: false,
    is_featured: false,
    category_id: "",
    subcategory_id: "",
    created_at: "",
    updated_at: "",
    image: [],
    category: {
      id: "",
      category_name: "",
    },
    subcategory: {
      id: "",
      subcategory_name: "",
      category_id: "",
    },
    review: [],
  },
  completeTheLooks: {
    id: '',
    image: "",
    name: "",
    price: 0,
    slug: "",
  },
  youMayAlsoLike: [],
};

const productDetailedViewSlice = createSlice({
  name: "productListing",
  initialState: initialState,
  reducers: {
    setProductDetails: (state, action: PayloadAction<IProductDetails>) => {
      state.productDetails = action.payload;
    },
    setCompleteTheLooks: (state, action: PayloadAction<IProductListing>) => {
      state.completeTheLooks = action.payload;
    },
    setYouMayAlsoLike: (state, action: PayloadAction<IProductListing[]>) => {
      state.youMayAlsoLike = action.payload;
    },
  },
});

export const { setProductDetails, setCompleteTheLooks, setYouMayAlsoLike } = productDetailedViewSlice.actions;

export default productDetailedViewSlice.reducer;
