import * as Yup from "yup";

export const adminloginInitialValues = {
  email: "",
  password: "",
};

export const adminloginValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});
