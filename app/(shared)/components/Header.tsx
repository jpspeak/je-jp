"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Hamburger from "hamburger-react";
import HeaderRating from "./HeaderRating";
import CalComModal from "./CalComModal";
import { Dictionary } from "@/app/[lang]/dictionaries";
import LanguageSelector from "./LanguageSelector";
import Line from "./svg/Line";

export const navList = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "projects",
    url: "/#projects",
  },
  {
    name: "testimonials",
    url: "/#reviews",
  },
];

function Header({ dict }: { dict: Dictionary }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <header className="hidden lg:block fixed top-0 z-10 bg-white w-full shadow-[-0.9px_0.5px_2.5px_0_rgba(0,0,0,0.1)]">
        <div className="flex items-center container mx-auto lg:py-[17px] py-3 px-4">
          <div className="lg:hidden mr-4">
            <Hamburger toggled={isOpen} toggle={setOpen} color="#141424" />
          </div>
          <Link href="/">
            <div className="relative size-[50px] lg:size-[65px] mr-[45px]">
              <Image
                src="/assets/images/jedesigns-logo.webp"
                fill
                alt="jedesigns logo"
                className="absolute top-0 object-contain"
              />
            </div>
          </Link>
          <nav className="lg:flex gap-[45px] hidden">
            {navList
              .filter((i) => i.url !== "/")
              .map((navItem, i) => (
                <Link key={i} href={navItem.url} className="font-semibold">
                  {
                    dict.navigation[
                      navItem.name.toLowerCase() as keyof typeof dict.navigation
                    ]
                  }
                </Link>
              ))}
          </nav>
          <LanguageSelector />
          <div className="grow" />
          <div className="mr-[32px] hidden lg:block mt-[6px]">
            <HeaderRating dict={dict} />
          </div>
          <a href="https://line.me/R/ti/p/@844tbckb" target="_blank">
            <Button className="lg:h-[60px] lg:text-[26px] lg:min-w-[185px] bg-[#07c654] text-white lg:py-[10px] lg:px-[14px] gap-[12px] flex">
              <Line />
              <span>{dict.navigation.cta}</span>
            </Button>
          </a>
        </div>
        <div
          style={{ height: isOpen ? "calc(100% - 74px)" : "0" }}
          className="shadow-sm lg:shadow-none overflow-hidden w-full absolute z-10 transition-all duration-500 ease-in-out bg-white"
        >
          <nav className="flex flex-col items-center ">
            {navList.map((navItem, i) => (
              <Link
                key={i}
                href={navItem.url}
                onClick={() => setOpen(false)}
                className="font-medium mt-[45px]"
              >
                {navItem.name}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center mt-20">
            <HeaderRating dict={dict} />
          </div>
        </div>
      </header>
      <div className="hidden lg:block h-[100px] w-full" />
    </>
  );
}

export default Header;
