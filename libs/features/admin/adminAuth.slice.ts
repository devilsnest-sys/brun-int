import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAdminAuthInitialState {
  isLoadingFullScreenLoader: boolean;
  isAuthenticated: boolean;
  isAuthError: boolean;
}

const initialState: IAdminAuthInitialState = {
  isLoadingFullScreenLoader: true,
  isAuthenticated: false,
  isAuthError: false,
};

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: initialState,
  reducers: {
    setIsLoadingFullScreenLoader(state, action: PayloadAction<boolean>) {
      state.isLoadingFullScreenLoader = action.payload;
    },
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    setIsAuthError(state, action: PayloadAction<boolean>) {
      state.isAuthError = action.payload;
    },
  },
});

export const { setIsAuthenticated, setIsLoadingFullScreenLoader } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
