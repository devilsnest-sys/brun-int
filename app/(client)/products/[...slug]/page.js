"use client";
import { getApi } from "@Repository/Api";
import ProductDetailedView from "@components/client/Products/ProductDetailedView";
import ProductReviewAndLook from "@components/client/Products/ProductReviewAndLook";
import React, { useEffect, useState } from "react";

const ProductDetails = ({ params }) => {
  const [details, setDetails] = useState({ data: {} });

  useEffect(() => {
    if (params.slug) {
      getApi({
        url: `api/v1/product/${params.slug[0]}?product=${params.slug[1]}`,
        setResponse: setDetails,
      });
    }
  }, [params.slug]);

  return (
    <main className="product__details m-7 mt-28">
      <ProductDetailedView productDetail={details.data} />
      <ProductReviewAndLook productDetail={details.data} />
      {/* <ProductRecommendation /> */}
    </main>
  );
};

export default ProductDetails;
