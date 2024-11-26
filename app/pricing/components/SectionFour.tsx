import React from "react";
import Image from "next/image";
import { Button } from "@/app/(shared)/components/ui/button";
import { twMerge } from "tailwind-merge";

const solutions = [
  {
    category: "Creative",
    name: "Advertising Design",
  },
  {
    category: "Creative",
    name: "Album Artwork",
  },
  {
    category: "Creative",
    name: "Billboard Design",
  },
  {
    category: "Creative",
    name: "Book and eBook Covers",
  },
  {
    category: "Creative",
    name: "Branding and Identity",
  },
  {
    category: "Creative",
    name: "Brochure Design",
  },
  {
    category: "Creative",
    name: "Business Cards Design",
  },
  {
    category: "Creative",
    name: "Catalog Design",
  },
  {
    category: "Creative",
    name: "Custom Illustrations",
  },
  {
    category: "Creative",
    name: "Direct Mail Design",
  },
  {
    category: "Creative",
    name: "Environmental Graphics",
  },
  {
    category: "Creative",
    name: "Event Invitations Design",
  },
  {
    category: "Creative",
    name: "Flyer Design",
  },
  {
    category: "Creative",
    name: "Greeting Card Design",
  },
  {
    category: "Creative",
    name: "Infographic Design",
  },
  {
    category: "Creative",
    name: "Label Design",
  },
  {
    category: "Creative",
    name: "Logo Design",
  },
  {
    category: "Creative",
    name: "Magazine / Editorial Design",
  },
  {
    category: "Creative",
    name: "Menu Design",
  },
  {
    category: "Creative",
    name: "Merchandise Design",
  },
  {
    category: "Creative",
    name: "Packaging Design",
  },
  {
    category: "Creative",
    name: "Poster Design",
  },
  {
    category: "Creative",
    name: "Presentation Design",
  },
  {
    category: "Creative",
    name: "Signage Design",
  },
  {
    category: "Creative",
    name: "Stationery Design",
  },
  {
    category: "Creative",
    name: "Social Media Banner",
  },
  {
    category: "Creative",
    name: "Trade Show Displays",
  },
  {
    category: "Creative",
    name: "Vehicle Wrap Design",
  },
  {
    category: "Creative",
    name: "Website Banner",
  },
  {
    category: "Creative",
    name: "Yard Signage Design",
  },
];

const categories = ["Creative", "Marketing", "Multimedia"];
// const categories = Array.from(
//   new Set(solutions.map((solution) => solution.category))
// );

function SectionFour() {
  return (
    <section className="bg-primary relative py-[70px] lg:py-[140px] static-background-light">
      <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[30px] lg:gap-[100px]">
        <div>
          <div className="w-full h-0 pb-[100%] relative">
            <Image
              src="/assets/images/exper-tech-environmental-copy@3x.png"
              fill
              alt="Unlock you brands personality"
              className="shrink-0 object-contain w-full h-full"
            />
          </div>
        </div>
        <div>
          <h1 className="text-[50px] lg:text-[100px] font-portlin uppercase tracking-[0.5px] leading-[0.9] text-balance text-white">
            UNLOCK YOUR
            <br className="hidden lg:block" /> BRANDS
            <br className="hidden lg:block" />
            <span className="text-secondary"> PERSONALITY!</span>
          </h1>
          <p className="text-sm leading-normal lg:text-lg mt-[30px] lg:mt-[40px] text-[#a7a7bc]">
            Imagine your brand coming to life with a character as unique as your
            business! Our talented team is ready create an unforgettable mascots
            that resonate with your audience - whether you&apos;re aiming for
            fun and quirky or sleek and professional.
            <br />
            <br />
            <span className="text-white">
              Let&apos;s add some personality to your brand today!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
