import { IProductListing } from "@modals/productListing/productListing.types";

interface IHeroCTA {
  heading: string;
  description: string;
  route: string;
}

interface IHomepageCarousel {
  heading: string;
  data: IProductListing[];
}

interface INewArrivals {
  data: IProductListing[];
}

interface IBrunLogo{
  fill: string;
  className?: string;
}

interface ISideNavbarItems{
  title: string;
  link: string;
}

export type { IHeroCTA, IHomepageCarousel, INewArrivals, IBrunLogo, ISideNavbarItems };
