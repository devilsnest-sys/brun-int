import { EOrderStatus, EPaymentStatus, IOrderHistory } from "@modals/account/account.types";
import { IProductListing } from "@modals/productListing/productListing.types";
import newarrivals from "@public/assets/homepage/new-arrivals-1.png";
import product from "@public/assets/product.jpg";

export const products: IProductListing[] = [
  {
    id: "1",
    name: "Polo",
    price: 3000,
    image: product,
    slug: "polo",
  },
  {
    id: "2",
    name: "Crew Neck",
    price: 2500,
    image: product,
    slug: "crew-neck",
  },
  {
    id: "3",
    name: "Sweat",
    price: 3500,
    image: product,
    slug: "sweat",
  },
  {
    id: "4",
    name: "Shirt",
    price: 4000,
    image: product,
    slug: "shirt",
  },
  {
    id: "5",
    name: "Full Sleeves Polo",
    price: 3000,
    image: product,
    slug: "full-sleeves-polo",
  },
  {
    id: "6",
    name: "Polo",
    price: 3000,
    image: product,
    slug: "polo",
  },
  {
    id: "7",
    name: "Crew Neck",
    price: 2500,
    image: product,
    slug: "crew-neck",
  },
  {
    id: "8",
    name: "Sweat",
    price: 3500,
    image: product,
    slug: "sweat",
  },
  {
    id: "9",
    name: "Shirt",
    price: 4000,
    image: product,
    slug: "shirt",
  },
  {
    id: "10",
    name: "Full Sleeves Polo",
    price: 3000,
    image: product,
    slug: "full-sleeves-polo",
  },
];
export const newArrival: IProductListing[] = [
  {
    id: "1",
    name: "Polo",
    price: 3000,
    image: newarrivals,
    slug: "polo",
  },
  {
    id: "2",
    name: "Crew Neck",
    price: 2500,
    image: newarrivals,
    slug: "crew-neck",
  },
  {
    id: "3",
    name: "Sweat",
    price: 3500,
    image: newarrivals,
    slug: "sweat",
  },
  {
    id: "4",
    name: "Shirt",
    price: 4000,
    image: newarrivals,
    slug: "shirt",
  },
  {
    id: "5",
    name: "Full Sleeves Polo",
    price: 3000,
    image: newarrivals,
    slug: "full-sleeves-polo",
  }
];

export const wishistData = [
  {
    id: "1",
    product_id: "p001",
    title: "Product 1",
    image: product,
    price: 19.99,
    slug: "product-1",
    user_id: "u001",
    created_at: "2024-04-23T12:00:00Z",
    updated_at: "2024-04-23T12:00:00Z"
  },
  {
    id: "2",
    product_id: "p002",
    title: "Product 2",
    image: product,
    price: 29.99,
    slug: "product-2",
    user_id: "u002",
    created_at: "2024-04-23T12:00:00Z",
    updated_at: "2024-04-23T12:00:00Z"
  },
  {
    id: "3",
    product_id: "p003",
    title: "Product 3",
    image: product,
    price: 39.99,
    slug: "product-3",
    user_id: "u003",
    created_at: "2024-04-23T12:00:00Z",
    updated_at: "2024-04-23T12:00:00Z"
  }
];

export const ColorsData = [
  {
      color: "#fffeee",
      name: "White"
  },
  {
      color: "#000000",
      name: "Black"
  },
  {
      color: "#ff0000",
      name: "Red"
  },
  {
      color: "#00ff00",
      name: "Green"
  },
  {
      color: "#0000ff",
      name: "Blue"
  },
  {
      color: "#ffff00",
      name: "Yellow"
  },
  {
      color: "#ff00ff",
      name: "Pink"
  },
  {
      color: "#00ffff",
      name: "Cyan"
  },
  {
      color: "#ff8000",
      name: "Orange"
  },
  {
      color: "#8000ff",
      name: "Purple"
  },
  {
      color: "#0080ff",
      name: "Sky Blue"
  },
  {
      color: "#ff0080",
      name: "Magenta"
  }
]

export const PRICERANGE: [number, number] = [0, 10000];

export const RETURNDAYSLEFT: number = 15;

export const ORDERHISTORY: IOrderHistory[] = [
];

const dummyProducts: IProductListing[] = []

for (let i = 1; i <= 5; i++) {
  ORDERHISTORY.push({
    id: i.toString(),
    user_id: "user_" + i.toString(),
    address_id: "address_" + i.toString(),
    razorpay_order_id: "order_" + i.toString(),
    razorpay_payment_id: "payment_" + i.toString(),
    razorpay_signature: "signature_" + i.toString(),
    payment_time: "2024-05-01T12:00:00Z",
    products: dummyProducts,
    amount: 295.95, // Total amount of all products
    coupon_id: "coupon_" + i.toString(),
    invoice_no: "INV12345_" + i.toString(),
    status: EPaymentStatus.SUCCESS,
    order_status: EOrderStatus.DELIVERED,
    created_at: "2024-04-30T12:00:00Z"
  });
}