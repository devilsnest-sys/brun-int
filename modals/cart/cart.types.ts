import { StaticImageData } from "next/image";
import { MouseEvent } from "react";

interface IUpdateCartPayload {
    fetchProducts: ICartProduct[];
    totalAmount: number;
}

interface ICartApiResponse {
    statusCode: number,
    data: {
        fetchProducts: ICartProduct[],
        totalAmount: number
    },
    message: string,
    success: boolean
}

interface ICartProduct {
    id: string;
    quantity: number;
    size: string;
    color: string;
    price: number;
    title: string;
    image: string | StaticImageData;
    slug: string;
}

interface IDefaultProductState {
    id: string;
    quantity: number;
    size: string;
    color: string;
    price: number;
    title: string;
    slug: string;
    image: string;
}

interface ICartState{
    cartPageActiveTab: 1 | 2;
    productCustomization: ICartProduct;
    cartProducts: ICartProduct[];
    totalAmount: number;
    discountPercent: number;
    discountAmount: number;
    discountCoupon: string;
}

interface IDelete {
    onClick: (e: MouseEvent) => void;
    className?: string;
}

export type { ICartState, ICartProduct, IDefaultProductState, IDelete, ICartApiResponse, IUpdateCartPayload };