import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IResetRequest {
  email: string;
}

interface IResetResponse {
  statusCode: number;
  data: null;
  message: string;
  success: boolean;
}

// const requestResetPasswordApi = createApi({
//   reducerPath: "requestResetPasswordApi",
//   baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
//   endpoints: (builder) => ({
//     requestResetPassword: builder.mutation<IResetResponse, IResetRequest>({
//       query: (body) => ({
//         url: "/user/forgot-password",
//         method: "POST",
//         body,
//       }),
//     }),
//   }),
// });

// const { useRequestResetPasswordMutation } = requestResetPasswordApi;

// export { useRequestResetPasswordMutation, requestResetPasswordApi };

interface IRequestResetPasswordApi {
  email: string;
}

export const requestResetPasswordApi = (payload: IRequestResetPasswordApi) => async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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