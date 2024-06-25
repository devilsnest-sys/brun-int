import { useCallback, useState } from "react";
import {
  IApiError,
  IApiHeaders,
  IFetchQuery,
  IMakeAuthenticatedAPICall,
} from "@modals/login/login.types";
import {
  getAccessTokenFromStorage,
  getRefreshTokenFromStorage,
  refreshAccessToken,
  saveAccessTokenToStorage,
  saveRefreshTokenToStorage,
} from "@services/tokens/tokens.service";

export const useMakeAuthenticatedAPICall = <T>(): IMakeAuthenticatedAPICall<T> => {
  const [data, setData] = useState<T | null>(null);;
  const [error, setError] = useState<IApiError>({
    isError: false,
    message: "",
    status: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const callApi = useCallback(
    async (fetchQuery: IFetchQuery, retryCount: number = 0) => {
      setLoading(true);
      try {
        const accessToken = getAccessTokenFromStorage();
        if (!accessToken) {
          return setError({
            isError: true,
            message: "Session expired, please login.",
            status: 401,
          });
        }

        const headers: IApiHeaders = {
          Authorization: `Bearer ${accessToken}`,
        };

        const response = await fetchQuery(headers);
        if (!response.ok) {
          if (response.status === 500) {
            if (retryCount < 3) {
              await refreshTokensAndRetry(fetchQuery, retryCount);
            } else {
              return setError({
                isError: true,
                message: "Session expired, please login.",
                status: 401,
              });
            }
          } else {
            return setError({
              isError: true,
              message: "Failed to fetch data.",
              status: 401,
            });
          }
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        const error = err as { message: string; status: number };
        setError({ isError: true, message: error.message, status: 500 });
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const refreshTokensAndRetry = async (
    fetchQuery: IFetchQuery,
    retryCount: number
  ) => {
    const refreshToken = getRefreshTokenFromStorage();
    if (!refreshToken) {
      throw new Error("Session expired, please login.");
    }

    const newTokens = await refreshAccessToken(refreshToken);
    if (newTokens) {
      saveAccessTokenToStorage(newTokens.accessToken);
      saveRefreshTokenToStorage(newTokens.refreshToken);

      callApi(fetchQuery, retryCount + 1);
    } else {
      throw new Error("Failed to refresh tokens.");
    }
  };

  return { callApi, data, error, loading };
};
