import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ITabsState {
  activeTab: number;
}

const initialState: ITabsState = {
  activeTab: 0,
};

const tabsSlice = createSlice({
  name: "tabsSlice",
  initialState: initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<number>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = tabsSlice.actions;

export default tabsSlice.reducer;
