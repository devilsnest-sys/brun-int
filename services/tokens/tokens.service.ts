import { AccessToken, IRefreshAccessTokenResponse, IRefreshTokenResponse, RefreshToken } from "@modals/tokens/tokens.types";

// Function to save access token to localStorage
export const saveAccessTokenToStorage = (accessToken: AccessToken): void => {
  localStorage.setItem("accessToken", accessToken);
};

// Function to retrieve access token from localStorage
export const getAccessTokenFromStorage = (): AccessToken | null => {
  return localStorage.getItem("accessToken");
};

// Function to save refresh token to localStorage
export const saveRefreshTokenToStorage = (refreshToken: RefreshToken): void => {
  localStorage.setItem("refreshToken", refreshToken);
};

// Function to retrieve refresh token from localStorage
export const getRefreshTokenFromStorage = (): RefreshToken | null => {
  return localStorage.getItem("refreshToken");
};

// Function to save userId token to localStorage
export const saveUserIdToStorage = (userId: string): void => {
  localStorage.setItem("userId", userId);
};

// Function to save userId token to localStorage
export const getUserIdToStorage = (): string | null => {
  return localStorage.getItem("userId");
};

// Function to clear tokens from localStorage
export const clearTokensFromStorage = (): void => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};


export const refreshAccessToken = async ( refreshToken: RefreshToken ): Promise<IRefreshAccessTokenResponse | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/refresh`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh_token: refreshToken }),
      }
    );

    if (response.ok) {
      const data : IRefreshTokenResponse = await response.json();
      return {accessToken: data.data.accessToken, refreshToken: data.data.refreshToken};
    }

    return null;
  } catch (error) {
    console.error("An error occurred while refreshing access token", error);
    return null;
  }
};
