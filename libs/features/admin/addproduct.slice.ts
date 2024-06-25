import {
  IAdminAddProductInitialState,
  ICompleteTheLook,
  ICompleteTheLookRecommendation,
  IFeatured,
  IProductCategory,
  IProductSubCategory,
  ISizeSpecsAction,
} from "@modals/admin";
import { EProductSizeEnum } from "@modals/productListing/productListing.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IAdminAddProductInitialState = {
  categories: [],
  subCategories: [],
  selectedCategory: "",
  selectedSubCategory: "",
  sizes: [],
  completeTheLook: {
    id: "",
    product_name: "",
  },
  homepageProduct: [],
  products: [],
  productDefaultImage: null,
  productImageOne: null,
  productImageTwo: null,
  productImageThree: null,
  productImageFour: null,
};

const adminAddProductSlice = createSlice({
  name: "adminAddProduct",
  initialState: initialState,
  reducers: {
    setCategories(state, action: PayloadAction<IProductCategory[]>) {
      state.categories = action.payload;
    },
    setSubCategories(state, action: PayloadAction<IProductSubCategory[]>) {
      state.subCategories = action.payload;
    },
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },
    setSelectedSubCategory(state, action: PayloadAction<string>) {
      state.selectedSubCategory = action.payload;
    },
    setSelectedSizes(state, action: PayloadAction<EProductSizeEnum>) {
      // if already exists, remove it
      const index = state.sizes.findIndex(
        (size) => size.size === action.payload
      );
      if (index !== -1) {
        state.sizes.splice(index, 1);
      } else {
        state.sizes.push({
          size: action.payload,
          quantity: "",
          weight: "",
          length: "",
          breadth: "",
          height: "",
          sku: "",
        });
      }
    },
    setSizeSpecs(state, action: PayloadAction<ISizeSpecsAction>) {
      const { size, key, value } = action.payload;
      const index = state.sizes.findIndex((s) => s.size === size);
      state.sizes[index][key] = value;
    },
    setCompleteTheLook(state, action: PayloadAction<ICompleteTheLook>) {
      state.completeTheLook= action.payload;
    },
    setHomepageProduct(state, action: PayloadAction<IFeatured[]>) {
      state.homepageProduct = action.payload;
    },    
    setCompleteTheLookRecommendations(state, action: PayloadAction<ICompleteTheLookRecommendation[]>) {
      state.products = action.payload;
    },
    setProductDefaultImage(state, action: PayloadAction<File | null>) {
      state.productDefaultImage = action.payload;
    },
    setProductImageOne(state, action: PayloadAction<File | null>) {
      state.productImageOne = action.payload;
    },
    setProductImageTwo(state, action: PayloadAction<File | null>) {
      state.productImageTwo = action.payload;
    },
    setProductImageThree(state, action: PayloadAction<File | null>) {
      state.productImageThree = action.payload;
    },
    setProductImageFour(state, action: PayloadAction<File | null>) {
      state.productImageFour = action.payload;
    },
  },
});

export const { setCategories, setSubCategories, setSelectedCategory, setCompleteTheLook, setHomepageProduct, setSelectedSizes, setSelectedSubCategory, setSizeSpecs, setCompleteTheLookRecommendations, setProductDefaultImage, setProductImageOne, setProductImageTwo, setProductImageThree, setProductImageFour } = adminAddProductSlice.actions;

export default adminAddProductSlice.reducer;
