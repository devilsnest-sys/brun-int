import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAuthInitialState {
  isPasswordResetRequested: boolean;
  accessToken: string | null;
}

const initialState: IAuthInitialState = {
  isPasswordResetRequested: false,
  accessToken: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setIsPasswordResetRequested: (state, action: PayloadAction<boolean>) => {
      state.isPasswordResetRequested = action.payload;
    },
  },
});

export const { setIsPasswordResetRequested } = authSlice.actions;

export default authSlice.reducer;
