"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import "./style.css";
import { urlForImage } from "@/sanity/lib/image";

function Carousel({ images }: { images: any[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="px-4 lg:px-0">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="rounded-[10px] lg:rounded-[15px]"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i} className="!w-full">
            <div className="w-full pb-[100%] relative">
              <Image
                src={urlForImage(image)}
                height="900"
                width="900"
                alt="Project title"
                className="absolute w-full h-full object-cover"
                quality={100}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper as any}
        loop={true}
        freeMode={true}
        // watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        breakpoints={{
          320: {
            slidesPerView: 4.5,
            spaceBetween: 8,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 7,
            spaceBetween: 15,
          },
        }}
        className="mt-5 lg:mt-[30px] !px-4 lg:!px-[56px]"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i} className="group cursor-pointer">
            <div className="w-full pb-[86%] relative">
              <Image
                src={urlForImage(image)}
                fill
                alt="Project title"
                className="rounded-[8px] object-cover"
              />
            </div>
            <div className="invisible group-[.swiper-slide-thumb-active]:visible h-[4px] rounded-[1.5px] mx-auto w-[80%] mt-[6px] bg-primary" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
