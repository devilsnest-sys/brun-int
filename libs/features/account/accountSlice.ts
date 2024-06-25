import {
  IAccountInitialState,
  IOrderHistory,
  IUserDetails,
  IWishList,
} from "@modals/account/account.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IAccountInitialState = {
  orderHistory: [],
  wishList: [],
  userDetails: {
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: null,
    is_active: false,
    created_at: "",
    updated_at: "",
    Address: [],
    wishlist: [],
    orders: [],
  },
};

const accountSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<IUserDetails>) => {
      state.userDetails = action.payload;
    },
    setWishList: (state, action: PayloadAction<IWishList[]>) => {
      state.wishList = action.payload;
    },
    setOrderHistory: (state, action: PayloadAction<IOrderHistory[]>) => {
      state.orderHistory = action.payload;
    },
  },
});

export const { setUserDetails, setWishList, setOrderHistory } = accountSlice.actions;

export default accountSlice.reducer;
