import { ICheckoutAddress } from "@modals/checkout/checkout.types";
import * as Yup from "yup";

export const deliveryAndBillingValidationSchema = Yup.object().shape({
  country: Yup.string().required("Country is required"),
  firstname: Yup.string().required("firstname is required"),
  lastname: Yup.string().required("lastname is required"),
  company: Yup.string().required("company is required"),
  phone: Yup.string().required("phone is required"),
  address: Yup.string().required("address is required"),
  locality: Yup.string().required("locality is required"),
  state: Yup.string().required("state is required"),
  pincode: Yup.string().required("pincode is required"),
  moreinfo: Yup.string(),
  billingCountry: Yup.string().required("Billing Country/Region is required"),
  billingFirstname: Yup.string().required("Billing First Name is required"),
  billingLastname: Yup.string().required("Billing Last Name is required"),
  billingCompany: Yup.string().required("Billing Company is required"),
  billingPhone: Yup.string().required("Billing Phone Number is required"),
  billingAddress: Yup.string().required("Billing Address is required"),
  billingLocality: Yup.string().required("Billing Locality is required"),
  billingState: Yup.string().required("Billing State is required"),
  billingPincode: Yup.string().required("Billing Pincode is required"),
  billingMoreinfo: Yup.string(),
});

export const handleDeliverySubmit = (
  values: ICheckoutAddress,
  isBillingAddressDifferent: boolean
) => {
  // TODO: handle payment and order creation
  // ADD SOME DUMMY PRODUCTS
  if (!isBillingAddressDifferent) {
  }
};
