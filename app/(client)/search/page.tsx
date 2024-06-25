"use client";
import React, { useEffect, useState } from "react";
import { RootState } from "@libs/store";
import { useSelector } from "react-redux";
import SearchBox from "@components/common/SearchBox";
import SearchFilter from "@components/client/Products/Search/SearchFilter";
import SearchResults from "@components/client/Products/Search/SearchResults";
import ProductRecommendation from "@components/client/Products/ProductRecommendation";
import { getApi } from "@Repository/Api";

const Search = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState({ data: [] });

  const url = search ? `api/v1/product?search=${search}` : "api/v1/product";

  useEffect(() => {
    getApi({
      url,
      setResponse: setProducts,
    });
  }, [url]);

  return (
    <section id="search" className="mt-28">
      <SearchBox setQuery={setSearch} />
      {products.data.length === 0 ? (
        <p className="searchresults__count sm:ml-8 mt-8">
          No Search Results Found “ Jumping Suit “
        </p>
      ) : (
        <>
          {/* <SearchFilter /> */}
          <SearchResults results={products.data} />
        </>
      )}
      {/* <ProductRecommendation layout={5} /> */}
    </section>
  );
};

export default Search;
