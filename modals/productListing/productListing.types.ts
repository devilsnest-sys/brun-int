import { StaticImageData } from "next/image";

enum EProductListingLayoutEnum {
  ONE_COLUMN = 1,
  TWO_COLUMN = 2,
  FIVE_COLUMN = 5,
}

enum EProductCategoryEnum {
  ALL_PRODUCTS = "ALL PRODUCTS",
  BOTTOMS = "BOTTOMS",
  TOPS = "TOPS",
  CREW_NECKS = "CREW NECKS",
  POLO = "POLO",
  FULL_SLEEVES_POLO = "FULL SLEEVES POLO",
  SWEAT = "SWEAT",
  SHIRT = "SHIRT",
}

enum EProductSizeEnum {
  XXXS = "XXXS",
  XXS = "XXS",
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

interface IProductListingState {
  productListing: IProductListing[];
  categorySelected:
    | EProductCategoryEnum.ALL_PRODUCTS
    | EProductCategoryEnum.BOTTOMS
    | EProductCategoryEnum.TOPS
    | EProductCategoryEnum.CREW_NECKS
    | EProductCategoryEnum.POLO
    | EProductCategoryEnum.FULL_SLEEVES_POLO
    | EProductCategoryEnum.SWEAT
    | EProductCategoryEnum.SHIRT;
  layout:
    | EProductListingLayoutEnum.ONE_COLUMN
    | EProductListingLayoutEnum.TWO_COLUMN
    | EProductListingLayoutEnum.FIVE_COLUMN;
    productListingSizeFilter:
    | EProductSizeEnum.XXXS
    | EProductSizeEnum.XXS
    | EProductSizeEnum.XS
    | EProductSizeEnum.S
    | EProductSizeEnum.M
    | EProductSizeEnum.L
    | EProductSizeEnum.XL
    | EProductSizeEnum.XXL
    | null;
    productListingColorFilter: string | null;
    productListingPriceFilter: [number, number];
}

interface IProductListing {
  image: StaticImageData | string;
  id: string;
  name: string;
  price: number;
  slug: string;
}

const PRODUCTCATEGORIES = [
  EProductCategoryEnum.ALL_PRODUCTS,
  EProductCategoryEnum.BOTTOMS,
  EProductCategoryEnum.TOPS,
  EProductCategoryEnum.CREW_NECKS,
  EProductCategoryEnum.POLO,
  EProductCategoryEnum.FULL_SLEEVES_POLO,
  EProductCategoryEnum.SWEAT,
  EProductCategoryEnum.SHIRT,
];

const PRODUCTSIZE = [
  EProductSizeEnum.XXXS,
  EProductSizeEnum.XXS,
  EProductSizeEnum.XS,
  EProductSizeEnum.S,
  EProductSizeEnum.M,
  EProductSizeEnum.L,
  EProductSizeEnum.XL,
  EProductSizeEnum.XXL,
];

export type { IProductListing, IProductListingState };

export {
  EProductListingLayoutEnum,
  EProductCategoryEnum,
  EProductSizeEnum,
  PRODUCTCATEGORIES,
  PRODUCTSIZE,
};
