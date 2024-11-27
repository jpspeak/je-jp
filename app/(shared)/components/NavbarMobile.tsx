"use client";

import Link from "next/link";
import Image from "next/image";
import HeaderRating from "./HeaderRating";
import CalComModal from "./CalComModal";
import Hamburger from "hamburger-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";
import { useWindowScroll } from "@uidotdev/usehooks";
import { cn } from "../lib/utils";
import { navList } from "./Header";
import { usePathname } from "next/navigation";
import { Dictionary } from "@/app/[lang]/dictionaries";
import Line from "./svg/Line";

export default function NavbarMobile({ dict }: { dict: Dictionary }) {
  const [isOpen, setOpen] = useState(false);
  const [{ y }] = useWindowScroll();
  const pathname = usePathname();
  const urlHash = window.location.hash;
  const windowMaxScroll =
    typeof window !== "undefined"
      ? document.body.offsetHeight - window.innerHeight
      : 0;

  // This will hide navbar when scroll position is at the bottom
  let hideNavbar = (y || 0) >= windowMaxScroll - 100;
  if (typeof window === "undefined") hideNavbar = false;

  if (pathname.includes("/booking/confirmation")) hideNavbar = true;

  const handleNavItemClick = () => {
    setOpen(false);
  };

  return (
    <div
      style={{ display: hideNavbar ? "none" : "block" }}
      className={cn("fixed bottom-4 px-4 w-full z-50")}
    >
      <Card className="lg:hidden rounded-[6px] border-none overflow-hidden shadow-[0px_9.5px_6.5px_0_rgba(0,0,0,0.2)]">
        <div
          className={cn(
            "transition-all overflow-hidden max-h-0",
            isOpen && "max-h-[1000px]"
          )}
        >
          <nav className="flex flex-col gap-[1px] bg-[#efefef] overflow-auto">
            {navList.map((navItem, i) => {
              // let isActive = pathname.includes(navItem.url);
              let isActive = urlHash ? navItem.url.includes(urlHash) : false;
              if (navItem.url === "/") {
                isActive = urlHash === "";
              }
              return (
                <Link
                  key={i}
                  onClick={handleNavItemClick}
                  href={navItem.url}
                  className={cn(
                    "text-[#adadad] bg-white text-[30px] uppercase tracking-[0.5px] px-6 flex items-center h-[80px]",
                    isActive && "text-primary"
                  )}
                >
                  {
                    dict.navigation[
                      navItem.name.toLowerCase() as keyof typeof dict.navigation
                    ]
                  }
                </Link>
              );
            })}
          </nav>
          <div className="relative">
            <div className="absolute w-full h-[8px] -top-[5px] z-[1]">
              <Image
                src="/assets/images/shape-7-copy-15.svg"
                fill
                alt="Transition"
                className="object-cover"
              />
            </div>
            <div className="bg-[#ff0000] text-white flex flex-col items-center pt-5 pb-6">
              <Image
                src="/assets/images/navbell@3x.webp"
                height="34"
                width="30"
                alt="Bell"
                className="object-cover"
              />
              <p className="mt-[10px] text-center text-[17px] font-medium">
                Your competitors aren&apos;t waiting.
              </p>
              <p className="relative text-center text-[17px] font-bold italic">
                Neither should you!
                <Image
                  src="/assets/images/shape-13-copy-2.svg"
                  height="8"
                  width="38"
                  alt="underline"
                  className="object-cover absolute right-0 -bottom-[8px]"
                />
                <Image
                  src="/assets/images/arrow-down-white@3x.webp"
                  height="34"
                  width="24"
                  alt="arrow down"
                  className="object-cover absolute -right-[32px] -bottom-[14px]"
                />
              </p>
            </div>
            <div className="absolute w-full h-[8px] -bottom-[6px] z-[1]">
              <Image
                src="/assets/images/shape-7-copy-16.svg"
                fill
                alt="Transition"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex p-4 pr-0 items-center">
          <Link href="/" className="mr-[11px]">
            <div className="relative size-[45px]">
              <Image
                src="/assets/images/je-logo.png"
                fill
                alt="je logo"
                className="absolute top-0 object-contain"
                quality={100}
              />
            </div>
          </Link>
          <div className="mr-[11px]">
            <HeaderRating dict={dict} />
          </div>
          <div className="grow flex justify-end">
            {/* <CalComModal.Trigger>
              <Button
                variant="outline"
                className="h-[40px] text-lg px-3 mr-[6px] w-full"
              >
                GET A QUOTE
              </Button>
            </CalComModal.Trigger> */}
            <Button className="bg-[#07c654] p-1 rounded-lg text-[14px] flex items-center gap-3 px-3">
              <Line className="size-[29px]" /> 話そう
            </Button>
          </div>
          <div className="px-2">
            <Hamburger
              size={22}
              toggled={isOpen}
              toggle={setOpen}
              color="#141424"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
