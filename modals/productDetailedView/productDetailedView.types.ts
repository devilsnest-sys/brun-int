// "id": "a9e2651e-c9f6-4916-ab9f-21c24acf77f0",
// "name": "DARK SHENRON T-SHIRT1",
// "slug": "dark-shenron-t-shirt1",
// "stock": 1000,
// "price": 4999,
// "discount": 10,
// "colours": [
//     {
//         "color": "red",
//         "is_available": true
//         },
//         {
//         "color": "blue",
//         "is_available": true
//         }
// ],
// "sizes": [
//     {
//         "size": "M",
//         "is_available": true
//         },
//         {
//         "size": "L",
//         "is_available": true
//         },
//         {
//         "size": "XL",
//         "is_available": true
//         },
//         {
//         "size": "XXL",
//         "is_available": true
//         }
// ],
// "description": "LOOSE-FITTING T-SHIRT IN BLACK WITH A ROUND NECK AND SHORT SLEEVES. FADED EFFECT. PAINT DETAILS ALL OVER THE GARMENT.",
// "is_published": false,
// "out_of_stock": false,
// "is_featured": false,
// "category_id": "c77dc40b-afc5-4454-9b0f-5dd8e2055da8",
// "subcategory_id": "f5f6a07b-aafe-4396-b4b7-1bee9196c5e4",
// "created_at": "2024-03-07T15:51:50.697Z",
// "updated_at": "2024-03-07T15:51:50.697Z",
// "image": [],
// "category": {
//     "id": "c77dc40b-afc5-4454-9b0f-5dd8e2055da8",
//     "category_name": "Accessories"
// },
// "subcategory": {
//     "id": "f5f6a07b-aafe-4396-b4b7-1bee9196c5e4",
//     "subcategory_name": "Leather bag",
//     "category_id": "c77dc40b-afc5-4454-9b0f-5dd8e2055da8"
// },
// "review": []

import { IProductListing } from "@modals/productListing/productListing.types";

interface IProductDetails {
    id: string;
    name: string;
    slug: string;
    stock: number;
    price: number;
    discount: number;
    colours: {
        color: string;
        is_available: boolean;
    }[];
    sizes: {
        size: string;
        is_available: boolean;
    }[];
    description: string;
    is_published: boolean;
    out_of_stock: boolean;
    is_featured: boolean;
    category_id: string;
    subcategory_id: string;
    created_at: string;
    updated_at: string;
    image: string[];
    category: {
        id: string;
        category_name: string;
    };
    subcategory: {
        id: string;
        subcategory_name: string;
        category_id: string;
    };
    review: string[];
}

interface IProductDetailedViewState {
    productDetails: IProductDetails;
    completeTheLooks: IProductListing;
    youMayAlsoLike: IProductListing[];
}

interface IProductDetailsResponse {
    data: IProductDetails;
    message: string;
    statusCode: number;
    success: boolean;
}

export type { IProductDetails, IProductDetailedViewState, IProductDetailsResponse };