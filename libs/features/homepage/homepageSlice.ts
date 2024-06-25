import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IHomepageState {
    isHomepageRoute: boolean;
    isSidebarOpen: boolean;
}

const initialState: IHomepageState = {
    isHomepageRoute: true,
    isSidebarOpen: false,
};

const homepageSlice = createSlice({
  name: "homepageSlice",
  initialState: initialState,
  reducers: {
    setIsHomepageRoute: (state, action: PayloadAction<boolean>) => {
      state.isHomepageRoute = action.payload;
    },
    setIsSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setIsHomepageRoute, setIsSidebarOpen } = homepageSlice.actions;

export default homepageSlice.reducer;
