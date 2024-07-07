import { ILoginValues } from "@modals/login/login.types";
import {
  saveAccessTokenToStorage,
  saveRefreshTokenToStorage,
  saveUserIdToStorage,
} from "@services/tokens/tokens.service";
import axios from "axios";
import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Please enter a password"),
});

export const loginApi = (payload, router) => async () => {
  console.log("Hiitin 1");

  try {
    console.log("Hiitin");
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/v1/user/login`,
      payload
    );
    const { accessToken, refreshToken, userId } = response.data.data;
    saveAccessTokenToStorage(accessToken);
    saveRefreshTokenToStorage(refreshToken);
    saveUserIdToStorage(userId);
    router.push("/");
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
