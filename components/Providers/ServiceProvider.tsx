"use client";

import { Provider } from "react-redux";
import store from "@libs/store";
import { Toaster } from "react-hot-toast";

export default function ServiceProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Provider store={store()}>
    {children}
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
  </Provider>;
}