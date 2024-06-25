import { IApiHeaders } from "@modals/login/login.types";

export const cartApi = () =>
  async (headers: IApiHeaders): Promise<Response> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/cart/fetch-items`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
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
