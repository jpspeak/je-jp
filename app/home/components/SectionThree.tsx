"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/(shared)/components/ui/button";
import Line from "@/app/(shared)/components/svg/Line";

function SectionThreeItem({
  imageUrl,
  title,
  description,
}: {
  imageUrl: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-[40px] lg:mb-[102px] lg:pl-[50px]">
      <div className="relative w-full pb-[100%]">
        <Image
          src={imageUrl}
          fill
          alt={title}
          quality={100}
          className="object-cover rounded-[6px] lg:rounded-[8px] absolute"
        />
      </div>
      <div className="flex items-center gap-[10px] lg:gap-[15px] mt-[28px] lg:mt-[38px] max-w-[480px]">
        <h3 className="text-white text-[24px] lg:text-[35px] -translate-y-[2px] group-[.lang-ja-family]:font-greycliffjpcd group-[.lang-en-family]:font-portlin group-[.lang-en-weight]:font-regular group-[.lang-ja-weight]:font-extrabold uppercase tracking-[0.5px] leading-[.9]">
          {title}
        </h3>
      </div>
      <p className="text-sm lg:text-lg leading-normal mt-[18px] lg:mt-[25px] text-[#a7a7bc] max-w-[480px]">
        {description}
      </p>
    </div>
  );
}

function SectionThreeItemEmpty() {
  return (
    <div className="mb-[60px] lg:mb-[37px] lg:pl-[50px]">
      <div className="relative w-full pb-[100%] bg-[#323343] rounded-[8px]">
        <div className="w-full h-full absolute p-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 894 894"
            className="w-full h-full"
          >
            <path
              stroke="#10101C"
              strokeWidth="4"
              strokeDasharray="20, 32"
              fill="none"
              d="M25.1 5.1H866c11.046 0 20 9.854 20 20V866c0 11.046-8.954 20-20 20H25.1c-10.146 0-20-8.954-20-20V25.1c0-10.146 9.854-20 20-20z"
            />
          </svg>
        </div>
      </div>
      <div className="flex gap-[15px] mt-[28px] lg:mt-[38px] max-w-[480px]">
        <h3 className="text-white text-2xl lg:text-[35px] font-portlin uppercase tracking-[0.5px] leading-[.9]">
          YOUR COMPANY HERE
        </h3>
      </div>
      <p className="text-sm lg:text-lg mt-[25px] text-[#a7a7bc] max-w-[480px]">
        Take your company to new heights, imagine the endless possibilities or
        missed opportunities because you’re lacking proper branding for your
        business.
      </p>
    </div>
  );
}

function SectionThree({ dict }: { dict: any }) {
  return (
    <section className="bg-[#141423]  py-[70px] lg:py-[140px] striped-background static-background-light relative overflow-hidden">
      <div className="container px-4 mx-auto h-full relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[120px]">
          <div>
            <h1 className="text-[50px] lg:text-[80px] group-[.lang-ja-family]:font-greycliffjpcd group-[.lang-en-family]:font-portlin group-[.lang-en-weight]:font-regular group-[.lang-ja-weight]:font-extrabold uppercase tracking-[0.5px] leading-[0.9] text-balance text-white">
              {/* IGNITE <span className="text-secondary">YOUR</span>
              <br />
              <span className="text-secondary">BRANDS</span> POTENTIAL */}
              {dict.homePage.sectionThree.title}
            </h1>

            <p className="text-sm lg:text-lg leading-normal mt-[24px] lg:mt-[40px] text-[#ffffff66] mb-0 lg:mb-[124px]">
              {dict.homePage.sectionThree.description}
            </p>
            <div className="mt-[40px] lg:mt-0">
              <SectionThreeItem
                imageUrl="/assets/images/final-logos-11@3x.webp"
                title={dict.homePage.sectionThree.itemOne.title}
                description={dict.homePage.sectionThree.itemOne.description}
              />
              <SectionThreeItem
                imageUrl="/assets/images/final-logos-08@3x.webp"
                title={dict.homePage.sectionThree.itemTwo.title}
                description={dict.homePage.sectionThree.itemTwo.description}
              />
            </div>
          </div>
          <div className="mt-0 lg:mt-[272px]">
            <SectionThreeItem
              imageUrl="/assets/images/final-logos-13@3x.webp"
              title={dict.homePage.sectionThree.itemThree.title}
              description={dict.homePage.sectionThree.itemThree.description}
            />
            <SectionThreeItem
              imageUrl="/assets/images/final-logos-10@3x.webp"
              title={dict.homePage.sectionThree.itemFour.title}
              description={dict.homePage.sectionThree.itemFour.description}
            />
          </div>
        </div>
        {/* <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          className="lg:rounded-[15px] mt-[45px] lg:!hidden !overflow-visible"
        >
          <SwiperSlide>
            <SectionThreeItem
              imageUrl="/assets/images/layer-23@3x.webp"
              title="ELITE CARPET CLEANING PROS"
              description="Taking Martika’s Food Truck brand to the next level with a 
              logo that not only stands out but speaks directly to their 
              customer base."
              percentage="225"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SectionThreeItem
              imageUrl="/assets/images/layer-22@3x.webp"
              title="THE FLASH ELECTRIC"
              description="Taking Martika’s Food Truck brand to the next level with a 
              logo that not only stands out but speaks directly to their 
              customer base."
              percentage="150"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SectionThreeItem
              imageUrl="/assets/images/layer-25@3x.webp"
              title="SLAPSHOTS AIR"
              description="Taking Martika’s Food Truck brand to the next level with a 
              logo that not only stands out but speaks directly to their 
              customer base."
              percentage="140"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlide>
              <SectionThreeItem
                imageUrl="/assets/images/layer-6@3x.webp"
                title="BIG SPRINT BUILDERS, CO."
                description="Take your company to new heights, imagine the endless
                possibilities or missed opportunities because you’re
                lacking proper branding for your business."
                percentage="180"
              />
            </SwiperSlide>
          </SwiperSlide>
        </Swiper> */}

        <div className="w-full h-full flex flex-col justify-center items-center relative mt-[18px] lg:mt-0">
          <p className="text-[24px] lg:text-[28px] -rotate-[3deg] text-[#ff0000] group-[.lang-ja-family]:font-greycliffjpcd group-[.lang-en-family]:text-[24px] lg:group-[.lang-en-family]:text-[32px] group-[.lang-en-family]:font-portlin group-[.lang-en-weight]:font-regular">
            {dict.homePage.sectionThree.infoSubtitle}
          </p>
          <h1 className="text-white text-[50px] lg:text-[90px] text-center group-[.lang-ja-family]:font-greycliffjpcd group-[.lang-en-family]:font-portlin group-[.lang-en-weight]:font-regular group-[.lang-ja-weight]:font-extrabold uppercase tracking-[0.5px] leading-[.9] text-balance mt-[10px] lg:mt-[30px]">
            {dict.homePage.sectionThree.infoTitle}
          </h1>
        </div>
        <p className="text-sm lg:text-lg leading-normal mt-4 lg:mt-[25px] text-[#a7a7bc] max-w-[395px] text-center mx-auto">
          {dict.homePage.sectionThree.infoDescription}
        </p>
        <div className="flex justify-center items-center gap-[36px] mt-[30px]">
          {/* <Link href="/pricing" className="w-full lg:w-auto">
            <Button
              variant="secondary"
              className="mx-auto lg:px-[58px] w-full lg:w-auto"
            >
              BRAND PACKAGE
            </Button>
          </Link> */}
          <p className="text-white text-[14px] lg:text-[28px]">
            {dict.homePage.sectionThree.infoCtaSub}
          </p>
          <a href="https://line.me/R/ti/p/@844tbckb" target="_blank">
            <Button className="lg:text-[28px] lg:min-w-[185px] bg-[#07c654] text-white lg:py-[10px] lg:px-[14px] gap-[12px] flex">
              <Line className="w-[44px] h-[36px] lg:w-[52px] lg:h-[48px]" />
              <span>{dict.homePage.sectionThree.infoCta}</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
