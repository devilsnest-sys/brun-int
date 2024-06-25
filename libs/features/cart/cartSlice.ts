import { ICartProduct, ICartState, IUpdateCartPayload } from "@modals/cart/cart.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ICartState = {
  cartPageActiveTab: 1,
  productCustomization: {
    id: "",
    quantity: 0,
    size: "",
    color: "",
    price: 0,
    title: "",
    image: "",
    slug: "",
  },
  cartProducts: [],
  totalAmount: 0,
  discountAmount: 0,
  discountPercent: 0,
  discountCoupon: "",
};

const productListingSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    setCartPageActiveTab: (state, action: PayloadAction<1 | 2>) => {
      state.cartPageActiveTab = action.payload;
    },
    setDefaultProductCustomization: (
      state,
      action: PayloadAction<ICartProduct>
    ) => {
      state.productCustomization = action.payload;
    },
    setProductID: (state, action: PayloadAction<string>) => {
      state.productCustomization.id = action.payload;
    },
    setProductQuantity: (state, action: PayloadAction<number>) => {
      state.productCustomization.quantity = action.payload;
    },
    setProductSize: (state, action: PayloadAction<string>) => {
      state.productCustomization.size = action.payload;
    },
    setProductColor: (state, action: PayloadAction<string>) => {
      state.productCustomization.color = action.payload;
    },
    addProductToCart: (state, action: PayloadAction<ICartProduct>) => {
      state.cartProducts.push(action.payload);
      state.totalAmount += action.payload.price * action.payload.quantity;
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      const idToRemove = action.payload;
      const productToRemove = state.cartProducts.find(product => product.id === idToRemove);
      
      if (productToRemove) {
        state.totalAmount -= productToRemove.price * productToRemove.quantity;
        state.cartProducts = state.cartProducts.filter(product => product.id !== idToRemove);
      }
    },
    updateProductQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const productToUpdate = state.cartProducts.find(product => product.id === id);
      
      if (productToUpdate) {
        const oldQuantity = productToUpdate.quantity;
        const productPrice = productToUpdate.price;
        const quantityDifference = quantity - oldQuantity;
        
        productToUpdate.quantity = quantity;
        state.totalAmount += quantityDifference * productPrice;
      }
    },
    updateCartFromDB: (state, action: PayloadAction<IUpdateCartPayload>) => {
      state.cartProducts = action.payload.fetchProducts;
      state.totalAmount = action.payload.totalAmount;
    }
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  updateProductQuantity,
  setDefaultProductCustomization,
  setCartPageActiveTab,
  setProductID,
  setProductQuantity,
  setProductSize,
  setProductColor,
  updateCartFromDB
} = productListingSlice.actions;

export default productListingSlice.reducer;
