import { EProductSizeEnum } from "@modals/productListing/productListing.types";

export interface IAddProductValues {
  slugText: string;
  metaTitle: string;
  metaDescription: string;
  productName: string;
  productDescription: string;
  productColorName: string;
  productColorCode: string;
  productSellPrice: string;
  productDiscount: string;
}

export interface IRestOfTheFields {
  selectedCategory: string;
  selectedSubCategory: string;
  sizes: IProductSize[];
  homepageProduct: IFeatured[];
  completeTheLook: ICompleteTheLook;
  productDefaultImage: File | null;
  productImageOne: File | null;
  productImageTwo: File | null;
  productImageThree: File | null;
  productImageFour: File | null;
}

export interface IProductCategory {
  id: string;
  category_name: string;
}

export interface IProductSubCategory {
  id: string;
  subcategory_name: string;
}

export interface ISizeSpecsAction {
  size: EProductSizeEnum;
  key: EProductSizeKeys;
  value: string;
}

export enum EProductSizeKeys {
  QUANTITY = "quantity",
  WEIGHT = "weight",
  LENGTH = "length",
  BREADTH = "breadth",
  HEIGHT = "height",
  SKU = "sku"
}

export interface IProductSize {
  size: EProductSizeEnum;
  quantity: string;
  weight: string;
  length: string;
  breadth: string;
  height: string;
  sku: string;
}

export enum EProductHomepageFlags {
  IS_PUBLISHED = "is_published",
  IS_FEATURED = "is_featured",
  IS_GIFT_FOR_YOU = "is_gift_for_you",
  IS_TOP_PICKS = "is_top_picks",
  IS_TRENDING = "is_trending",
  IS_NEW_ARRIVALS = "is_new_arrivals",
  IS_ICONIC_ESSENTIAL = "is_iconic_essential"
}

export interface ICompleteTheLook {
  id: string;
  product_name: string;
}

export interface IProductImage {
  id: string;
  image_id: string;
  image_url: string;
  is_banner: boolean;
  product_id: string;
  created_at: string;
}

export interface ICompleteTheLookRecommendation {
  id: string;
  product_name: string;
  image: IProductImage | undefined;
}

export interface IFeatured {
  value: string;
  label: string;
}

export interface IAdminAddProductInitialState {
  categories: IProductCategory[];
  subCategories: IProductSubCategory[];
  selectedCategory: string;
  selectedSubCategory: string;
  sizes: IProductSize[];
  completeTheLook: ICompleteTheLook;
  homepageProduct: IFeatured[];
  products: ICompleteTheLookRecommendation[];
  productDefaultImage: File | null;
  productImageOne: File | null;
  productImageTwo: File | null;
  productImageThree: File | null;
  productImageFour: File | null;
}

export interface IAddButtons {
  handleCancel: () => void;
  isLoading?: boolean;
}

export interface IAddCategory {
  handleGetSubCategories: (value: string) => void;
  isSubCategoryLoading: boolean;
}

export interface IProducts {
  id: string;
  name: string;
  slug: string;
  sku: string;
  price: number;
  discount: number;
  colours: string;
  hexcode: string;
  description: string;
  isPublished: boolean;
  outOfStock: boolean;
  isFeatured: boolean;
  isGiftForYou: boolean;
  isTopPicks: boolean;
  isTrending: boolean;
  isNewArrivals: boolean;
  isIconicEssential: boolean;
  categoryId: string;
  subcategoryId: string;
  createdAt: string;
  updatedAt: string;
  image: IProductImage[];
  category: Category;
  subcategory: Subcategory;
  size_and_quantity: SizeAndQuantity[];
}

interface SizeAndQuantity {
  size: string;
  quantity: number;
  sku: string;
}

interface Category {
  id: string;
  categoryName: string;
}

interface Subcategory {
  id: string;
  subcategoryName: string;
  categoryId: string;
}