import { ISignupValuesDB } from "@modals/login/login.types";
import * as Yup from "yup";

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

export const singupValidationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 3 characters or less")
    .required("First name is required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email addresss")
    .required("Email is required"),
  password: Yup.string()
    .required("Please enter a password")
    // check minimum characters
    .min(8, "Password must have at least 8 characters")
    // different error messages for different requirements
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  confirmPassword: Yup.string()
    .required("Please re-type your password")
    // use oneOf to match one of the values inside the array.
    // use "ref" to get the value of passwrod.
    .oneOf([Yup.ref("password")], "Passwords does not match"),
  acceptedTerms: Yup.boolean()
    .required("Required")
    .oneOf([true], "You must accept the privacy statement."),
});

export const signupApi = (payload: ISignupValuesDB) => async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/register`,
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
