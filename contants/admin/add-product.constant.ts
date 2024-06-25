import { EProductHomepageFlags, IAddProductValues } from "@modals/admin";
import { Option } from "react-multi-select-component";

export const addProductInitialValues: IAddProductValues = {
    slugText: '',
    metaTitle: '',
    metaDescription: '',
    productName: '',
    productDescription: '',
    productColorName: '',
    productColorCode: '',
    productSellPrice: '',
    productDiscount: '',
}

export const HOMEPAGECATEGORYOPTIONS: Option[] = [
    { label: EProductHomepageFlags.IS_PUBLISHED, value: EProductHomepageFlags.IS_PUBLISHED },
    { label: EProductHomepageFlags.IS_FEATURED, value: EProductHomepageFlags.IS_FEATURED },
    { label: EProductHomepageFlags.IS_GIFT_FOR_YOU, value: EProductHomepageFlags.IS_GIFT_FOR_YOU },
    { label: EProductHomepageFlags.IS_TOP_PICKS, value: EProductHomepageFlags.IS_TOP_PICKS },
    { label: EProductHomepageFlags.IS_TRENDING, value: EProductHomepageFlags.IS_TRENDING },
    { label: EProductHomepageFlags.IS_NEW_ARRIVALS, value: EProductHomepageFlags.IS_NEW_ARRIVALS },
    { label: EProductHomepageFlags.IS_ICONIC_ESSENTIAL, value: EProductHomepageFlags.IS_ICONIC_ESSENTIAL }
  ];