"use client";
import { getApi } from "@Repository/Api";
import LoadMoreProducts from "@components/client/Products/LoadMoreProducts";
import ProductCategory from "@components/client/Products/ProductCategory";
import ProductList from "@components/client/Products/ProductList";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState({ data: [] });

  const url = selectedCategory
    ? `api/v1/product?category=${selectedCategory}`
    : `api/v1/product`;

  useEffect(() => {
    getApi({
      url,
      setResponse: setProducts,
    });
  }, [selectedCategory]);

  return (
    <main className="Products text-xs sm:text-sm px-3 sm:px-0 mt-28">
      <ProductCategory
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      {products.data.length > 0 && <ProductList data={products?.data} />}
      {/* <LoadMoreProducts /> */}
    </main>
  );
};

export default Products;
