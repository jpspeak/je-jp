"use client";

import CalComModal from "@/app/(shared)/components/CalComModal";
import { Button } from "@/app/(shared)/components/ui/button";
import Image from "next/image";

function SectionFive() {
  return (
    <section className="relative py-[70px] lg:py-[98px] bg-secondary">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[8px] z-[1]">
        <Image
          src="/assets/images/shape-7-copy-10.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left">
          <h1 className="text-[40px] lg:text-[80px] font-portlin uppercase tracking-[0.5px] leading-[.9]">
            FORGING FUTURE-READY BRANDS
          </h1>
          <p className="text-sm lg:text-[17px] mt-[24px] lg:mt-[28px] lg max-w-[486px] text-pretty leading-[1.53]">
            Stop customers from treating your business like a commodity because
            you look exactly like everyone else!
          </p>
        </div>
        <CalComModal.Trigger>
          <Button className="mt-[30px] lg:mt-[0] lg:px-[48px] min-w-[225px]">
            GET A QUOTE!
          </Button>
        </CalComModal.Trigger>
      </div>
    </section>
  );
}

export default SectionFive;
