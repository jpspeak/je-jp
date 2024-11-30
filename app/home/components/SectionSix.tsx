"use client";

import Image from "next/image";
import SketchConcept from "./SketchConcept";
import { Button } from "@/app/(shared)/components/ui/button";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import Line from "@/app/(shared)/components/svg/Line";

function SectionSix({
  sketchConcept,
  dict,
}: {
  sketchConcept: any;
  dict: any;
}) {
  return (
    <section className="relative py-[70px] lg:py-[140px] bg-primary static-background before:z-[1]">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[7px] z-[1] static-background before:z-[1] before:h-[90%] before:top-[9%]">
        <Image
          src="/assets/images/shape-7-copy-11.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container px-4 mx-auto relative z-[1] grid grid-cols-1 lg:grid-cols-2 gap-[38px] lg:gap-[100px] items-center">
        <div className="lg:max-w-[466px] row-start-2 lg:row-start-auto">
          <h1 className="text-[50px] lg:text-[80px] group-[.lang-ja-family]:font-greycliffjpcd group-[.lang-en-family]:font-portlin group-[.lang-ja-weight]:font-extrabold group-[.lang-en-weight]:font-regular uppercase tracking-[0.5px] leading-none text-balance text-white max-w-[330px]">
            {/* TRANSFORMING
            <br /> <span className="text-secondary">IDEAS</span> INTO <br />
            <span className="text-secondary"> REALITY!</span> */}
            {dict.homePage.sectionSix.title}
          </h1>
          <p className="text-sm leading-normal lg:text-lg mt-[30px] lg:mt-[40px] text-white max-w-[400px]">
            {dict.homePage.sectionSix.description}
          </p>
          {/* <Link href="/pricing" className="block">
            <Button
              variant="secondary"
              className="mt-[30px] lg:mt-[40px] lg:px-[58px] w-full lg:w-auto"
            >
              BRAND PACKAGE
            </Button>
          </Link> */}
          <a href="https://line.me/R/ti/p/@844tbckb" target="_blank">
            <Button className="lg:text-[28px] lg:min-w-[185px] w-full lg:w-auto bg-[#07c654] text-white lg:py-[10px] lg:px-[14px] gap-[12px] flex mt-[30px] lg:mt-[48px]">
              <Line className="w-[44px] h-[36px] lg:w-[52px] lg:h-[48px]" />
              <span>{dict.homePage.sectionThree.infoCta}</span>
            </Button>
          </a>

          <p className="text-[#a7a7bc] mt-3 lg:mt-[14px] text-center lg:text-left text-xs lg:text-sm">
            {dict.homePage.sectionSix.ctaInfo}
          </p>
        </div>
        {sketchConcept &&
          sketchConcept.sketchBefore &&
          sketchConcept.sketchAfter && (
            <SketchConcept
              before={urlForImage(sketchConcept.sketchBefore as any)}
              after={urlForImage(sketchConcept.sketchAfter as any)}
            />
          )}
      </div>
    </section>
  );
}

export default SectionSix;
