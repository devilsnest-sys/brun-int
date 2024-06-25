"use client";

import { useRouter } from "next/navigation";
import React, { useRef } from "react";

function SearchBox({ setQuery }) {
  return (
    <div className="search__container mt-24 md:mt-28 border-t border-black p-3">
      <div className="flex w-full md:w-[703px] border border-black">
        <div className="input__icon__container relative w-full">
          <input
            onChange={(e) => setQuery(e.target.value)}
            className="w-full flex justify-center pl-3 pr-8 py-4 outline-none bg-transparent placeholder:text-black"
            type="text"
            placeholder="Search for products..."
          />
          <span className="material-symbols-rounded cursor-pointer absolute right-2 top-1/2 -translate-y-1/2">
            search
          </span>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
