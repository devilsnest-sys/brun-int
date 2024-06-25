"use client";
import { IHomepageCarousel } from "@modals/home/home.types";
import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { IProductListing } from "@modals/productListing/productListing.types";
import Link from "next/link";

const HomepageCarousel: React.FC<IHomepageCarousel> = ({ heading, data }) => {
  const swiperRef = useRef<SwiperRef | null>(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className=" w-full relative max-w-full text-left font-urbanist lg:pb-[65px]">
      <div className="flex justify-between mb-3 md:mb-8">
        <div className="uppercase text-sm md:text-3xl font-normal font-urbanist">
          {heading}
        </div>
        <div className="flex gap-1 cursor-pointer ">
          <div
            className="homepage__carousel__icon bg-[#F1F1F1] px-2 py-1 grid place-items-center"
            onClick={handlePrev}
          >
            <span className="material-symbols-rounded opacity-75 text-sm md:text-base">
              arrow_back_ios_new
            </span>
          </div>
          <div
            className="homepage__carousel__icon bg-[#F1F1F1] px-2 py-1 grid place-items-center"
            onClick={handleNext}
          >
            <span className="material-symbols-rounded opacity-75 text-sm md:text-base">
              arrow_forward_ios
            </span>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 1000 }}
        ref={swiperRef}
        breakpoints={{
          768: { slidesPerView: 3 },
        }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <HomepageCarouselItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const HomepageCarouselItem: React.FC<IProductListing> = ({
  image,
  name,
  price,
  id,
  slug
}) => {
  return (
    <Link href={`/products/${slug}/${id}`}>
      <div className="flex flex-col items-start justify-start gap-5 max-w-full">
        <Image
          className="relative max-w-full overflow-hidden max-h-full object-cover"
          loading="eager"
          alt=""
          src={image?.[0]?.image_url}
          width={596}
          height={832}
        />
        <div className="uppercase flex flex-col items-start justify-start gap-3 text-xs md:text-base">
          <div className=""> {name} </div>
          <div className="">₹{price} </div>
        </div>
      </div>
    </Link>
  );
};

export default HomepageCarousel;
