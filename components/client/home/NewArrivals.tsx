"use client";
import { INewArrivals } from "@modals/home/home.types";
import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { IProductListing } from "@modals/productListing/productListing.types";
import Link from "next/link";

const NewArrivals: React.FC<INewArrivals> = ({ data }) => {
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
          New Arrivals
        </div>
        <div className="flex gap-1 cursor-pointer">
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
      >
        {data?.length > 0 &&
          data.map((item, index) => (
            <SwiperSlide key={index}>
              <NewArrivalsCarouselItem {...item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

const NewArrivalsCarouselItem: React.FC<IProductListing> = ({ image, id }) => {
  return (
    <Link href={`/product/${id}`}>
      <Image
        className="relative max-w-full overflow-hidden max-h-full object-cover"
        loading="eager"
        alt=""
        src={image?.[0]?.image_url}
        width={910}
        height={712}
      />
    </Link>
  );
};

export default NewArrivals;
