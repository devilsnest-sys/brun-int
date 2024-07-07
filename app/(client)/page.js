"use client";

import HomepageCarousel from "@components/client/home/HomepageCarousel";
import HeroCTA from "@components/client/home/HeroCTA";
import SingleHeroImage from "@components/client/home/SingleHeroImage";
import NewArrivals from "@components/client/home/NewArrivals";
import React, { useEffect, useState } from "react";
import { getApi } from "../../Repository/Api";

export default function Home() {
  const [products, setProducts] = useState({ data: [] });
  const [newArrival, setNewArrival] = useState({ data: [] });

  const fetchProducts = () => {
    getApi({
      url: "api/v1/product",
      setResponse: setProducts,
    });
  };

  function fetchNewArrival() {
    getApi({
      url: "api/v1/product?new_arrivals=true",
      setResponse: setNewArrival,
    });
  }

  useEffect(() => {
    fetchProducts();
    fetchNewArrival();
  }, []);

  return (
    <main>
      <section className="w-full min-h-screen flex-1 relative bg-[url('/assets/hero-img.jpeg')] bg-cover bg-no-repeat bg-[top] max-w-full">
        <p className="max-w-lg absolute bottom-[15%] left-9 md:left-14 pr-5 md:pr-0 font-urbanist font-normal text-xs md:text-sm text-white">
          EXPERIENCE CLOTHING THAT TRANSCENDS THE PREDICTABLE, OFFERING STYLES
          THAT DEFY EXPECTATIONS AND REDEFINE FASHION NORMS
        </p>
      </section>
      <section className="flex flex-col justify-center gap-12 md:gap-16 py-10 px-5 md:px-10">
        <HeroCTA
          heading="Beyond predictable"
          description="Experience clothing that transcends the predictable, offering styles that defy expectations and redefine fashion norms"
          route="/products"
        />
        {products.data.length > 0 && (
          <HomepageCarousel heading="Gifts Just for You" data={products.data} />
        )}
        <SingleHeroImage
          heading="FEATURED"
          image="/assets/homepage/featured-img.png"
          route="/products"
        />
        <HeroCTA
          heading="Yes! We are all over the place"
          description="Embrace the eclectic allure of our diverse clothing collection, where we're everywhere and anywhere, curating styles that resonate with every fashion journey"
          route="/products"
        />
        {products.data.length > 0 && (
          <HomepageCarousel heading="TOP PICKS" data={products.data} />
        )}
        <SingleHeroImage
          heading="TRENDING"
          image="/assets/homepage/tranding-img.png"
          route="/products"
        />
        <HeroCTA
          heading="No formulas, just fearless creativity"
          description="Discover a world of fearless creativity in clothing, where there are no formulas, only endless possibilities"
          route="/products"
        />
        {newArrival.data.length > 0 && <NewArrivals data={newArrival.data} />}
        <HomepageCarousel heading="ICONIC ESSENTIAL" data={[]} />
      </section>
    </main>
  );
}
