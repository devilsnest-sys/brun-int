interface User {
  created_at: string;
  email: string;
  first_name: string;
  id: string;
  is_active: boolean;
  last_name: string;
  password: string;
  role: string;
  updated_at: string;
}

export interface ISignupApiResponse {
  statusCode: number;
  data: User;
  message: string;
  success: boolean;
}
