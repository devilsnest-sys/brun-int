import { ISignupValues } from "@modals/login/login.types";

const signupInitialValues: ISignupValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptedTerms: false,
};

export { signupInitialValues }