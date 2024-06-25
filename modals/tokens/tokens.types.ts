export type AccessToken = string;
export type RefreshToken = string;

interface IRefreshTokenResponse {
  statusCode: number;
  data: {
    accessToken: string;
    refreshToken: string;
  };
  message: string;
  success: boolean;
}

interface IRefreshAccessTokenResponse {
  accessToken: AccessToken;
  refreshToken: RefreshToken;
}

export type { IRefreshAccessTokenResponse, IRefreshTokenResponse };
