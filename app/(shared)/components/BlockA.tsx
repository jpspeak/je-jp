"use client";

import Image from "next/image";
import CalComModal from "./CalComModal";
import { Button } from "./ui/button";
import Line from "./svg/Line";
import { BreakableText } from "./BreakableText";

function BlockA({
  title,
  description,
  cta,
}: {
  title: string;
  description: string;
  cta: string;
}) {
  return (
    <div>
      <div className="relative flex justify-center">
        <div className="border-[1px] border-muted absolute top-1/2 w-full" />
        <p className="bg-white text-center px-4 lg:px-8 w-max group-[.lang-ja-family]:font-greycliffjpcd group-[.lang-en-family]:font-portlin group-[.lang-en-weight]:font-regular group-[.lang-ja-weight]:font-extrabold uppercase tracking-[0.5px] text-[20px] lg:text-[40px] z-[1] ">
          <BreakableText text={title} />
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/assets/images/je-logo-bw.webp"
          width="48"
          height="48"
          alt="JE logo black and white"
          className="mt-[30px] lg:mt-[38px]"
        />
        <p className="font-bold text-base lg:text-lg text-muted-foreground mt-[24px] leading-none">
          JE Designs LLC
        </p>
        <p className="text-xs lg:text-sm text-center text-muted-foreground mt-1 leading-none">
          {description}
        </p>
        {/* <CalComModal.Trigger>
          <Button className="mt-[37px]">REQUEST A QUOTE</Button>
        </CalComModal.Trigger> */}
        <a href="https://line.me/R/ti/p/@844tbckb" target="_blank">
          <Button className="lg:text-[28px] lg:min-w-[185px] bg-[#07c654] text-white lg:py-[10px] lg:px-[14px] gap-[12px] flex mt-[30px]">
            <Line className="w-[44px] h-[36px] lg:w-[52px] lg:h-[48px]" />
            <span>{cta}</span>
          </Button>
        </a>
      </div>
    </div>
  );
}

export default BlockA;
