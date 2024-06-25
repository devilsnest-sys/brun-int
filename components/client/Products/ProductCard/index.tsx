import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface IProductCard {
  image: StaticImageData | string;
  name: string;
  price: number;
  slug: string;
  is2Col?: boolean;
  isFirstChild?: boolean;
  id: string;
}

const ProductCard = ({
  image,
  name,
  price,
  slug,
  is2Col,
  isFirstChild,
  id,
}: IProductCard) => {
  return (
    <Link
      href={`/products/${slug}/${id}`}
      className={`productlist__card flex flex-col items-center gap-1 w-max ${
        is2Col && isFirstChild
          ? "justify-self-start"
          : is2Col && !isFirstChild
          ? "justify-self-end"
          : ""
      }`}
    >
      <div className="card__container">
        <Image
          src={image?.[0]?.image_url}
          alt={name}
          width={460}
          height={644}
        />
        <div className="card__text ">
          <p className="productlist__name mt-2">{name}</p>
          <p className="productlist__price mt-2">₹{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
