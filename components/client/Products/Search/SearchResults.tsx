import { RootState } from "@libs/store";
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const generateLayout = (layout: number) => {
  switch (layout) {
    case 1:
      return "grid grid-cols-1 gap-x-8 gap-y-12";
    case 5:
      return "grid grid-cols-5 gap-x-8 gap-y-12";
    default:
      return "grid grid-cols-2 gap-8 sm:gap-20";
  }
};

const SearchResults = ({ results }) => {
  const { isLoading, isError, searchResults, searchLayout } = useSelector(
    (state: RootState) => state.productSearch
  );

  return (
    <section id="search-results" className="max-w-7xl mx-auto mt-5 sm:mt-10">
      <div
        className={`products__card__container ${generateLayout(searchLayout)}`}
      >
        {results.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
