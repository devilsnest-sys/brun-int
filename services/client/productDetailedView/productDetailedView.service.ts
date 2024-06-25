import { IProductDetailsResponse } from "@modals/productDetailedView/productDetailedView.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const productDetailApi = createApi({
//   reducerPath: "productDetailApi",
//   baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
//   tagTypes: ["Product"],
//   endpoints: (builder) => ({
//     getProductDetails: builder.query<IProductDetailsResponse, string>({
//       query: (slug) => `/product/${slug}`,
//     }),
//   }),
// });

// const { useGetProductDetailsQuery } = productDetailApi;

// export { useGetProductDetailsQuery, productDetailApi };

export const productDetailApiFetch = (payload: string) => async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/product/${payload}`
      ,{
        referrerPolicy: 'unsafe-url'
      }
    );
    return response;
  } catch (error) {
    return {
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
      json: async () => ({
        message: "An unexpected error occurred.",
      }),
    } as Response;
  }
};
