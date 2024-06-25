import { IProductListing } from "@modals/productListing/productListing.types";
import { StaticImageData } from "next/image";

interface IAccountPayload {
  userId: string;
}

export enum RoleEnum {
  ADMIN = "admin",
  USER = "user",
}

export enum EPaymentStatus {
  PENDING = "pending",
  SUCCESS = "success",
  FAILED = "failed",
}

export enum EOrderStatus {
  INITIATED = "initiated",
  ACCEPTED = "accepted",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
  CANCELLED = "cancelled",
  RETURNED = "returned",
}

interface IWishList {
  id: string;
  product_id: string;
  title: string;
  image: string | StaticImageData;
  price: number;
  slug: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

interface IOrderHistory {
  id: string;
  user_id: string;
  address_id: string;
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  payment_time: string;
  products: IProductListing[];
  amount: number;
  coupon_id: string;
  invoice_no: string;
  status: EPaymentStatus;
  order_status: EOrderStatus;
  created_at: string;
}

interface IUserDetails {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: RoleEnum | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  Address: any[];
  wishlist: IWishList[];
  orders: IOrderHistory[];
}

interface IAccountDetails {
  statusCode: number;
  data: IUserDetails;
  message: string;
  success: boolean;
}

interface IAccountInitialState {
  userDetails: IUserDetails;
  wishList: IWishList[];
  orderHistory: IOrderHistory[];
}

export type {
  IAccountPayload,
  IAccountDetails,
  IAccountInitialState,
  IUserDetails,
  IWishList,
  IOrderHistory,
};
