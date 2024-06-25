import { RoleEnum } from "@modals/common/common.types";

interface IMyTextInput {
  label: string;
  id: string;
  name: string;
  type: string;
  className?: string;
  onFocus?: () => void;
}

interface IMyCheckBox {
  children: React.ReactNode;
  name: string;
  className?: string;
}

interface ISignupValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptedTerms: boolean;
}

interface ISignupValuesDB {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role?: RoleEnum.ADMIN | RoleEnum.USER;
}

interface ILoginValues {
  email: string;
  password: string;
}

interface IFetchQuery {
  (headers: IApiHeaders): Promise<Response>;
}

interface IApiHeaders {
  Authorization: string;
}

interface IApiError {
  isError: boolean;
  message: string;
  status: number;
}

interface IMakeAuthenticatedAPICall<T> {
  callApi: (fetchQuery: IFetchQuery, retryCount?: number) => Promise<any>;
  data: T | null;
  error: IApiError;
  loading: boolean;
}

interface IMakeUnauthenticatedAPICall {
  callApi: (fetchQuery: IFetchQueryUnauthenticated) => Promise<any>;
  error: IApiError;
  loading: boolean;
}

interface IFetchQueryUnauthenticated {
  (): Promise<Response>;
}

interface ILoginApiResponse{
  statusCode: number;
  data: {
    accessToken: string;
    refreshToken: string;
    userId: string;
  };
  message: string;
  success: boolean;
}

export type { IMyTextInput, IMyCheckBox, ISignupValues, ILoginValues, ISignupValuesDB, IFetchQuery, IApiError, IApiHeaders, IMakeAuthenticatedAPICall, IFetchQueryUnauthenticated, IMakeUnauthenticatedAPICall, ILoginApiResponse }