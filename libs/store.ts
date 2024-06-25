import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import productListingReducer from "./features/productListing/productListingSlice";
import productSearchReducer from "./features/productSearch/productSearchSlice";
import productDetailedViewReducer from "./features/productDetailedView/ProductDetailedViewSlice";
import cartReducer from "./features/cart/cartSlice";
import homepageReducer from "./features/homepage/homepageSlice";
import tabsReducer from "./features/tabs/tabsSlice";
import accountReducer from "./features/account/accountSlice";
import adminAuthReducer from './features/admin/adminAuth.slice';
import adminProductListingReducer from './features/admin/adminProductListing.slice';
import adminAddProductReducer from './features/admin/addproduct.slice';

export const makeStore = () => {
  return configureStore({
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['adminAddProduct/setProductDefaultImage', 'adminAddProduct/setProductImageOne', 'adminAddProduct/setProductImageTwo', 'adminAddProduct/setProductImageThree', 'adminAddProduct/setProductImageFour'],
        ignoredPaths: ['adminAddProductSlice.productDefaultImage', 'adminAddProductSlice.productImageOne', 'adminAddProductSlice.productImageTwo', 'adminAddProductSlice.productImageThree', 'adminAddProductSlice.productImageFour'],
      },
    }),
    reducer: {
      homepage: homepageReducer,
      auth: authReducer,
      productListing: productListingReducer,
      productDetailedView: productDetailedViewReducer,
      cart: cartReducer,
      tabs: tabsReducer,
      account: accountReducer,
      productSearch: productSearchReducer,
      adminAuth: adminAuthReducer,
      adminProductListing: adminProductListingReducer,
      adminAddProductSlice: adminAddProductReducer,
    }
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default makeStore;
