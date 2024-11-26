"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

function FooterTopBg() {
  const pathname = usePathname();
  const isFAQPage = pathname.includes("/faq");
  const isArticlesPage = pathname.includes("/articles");
  const isPricingPage = pathname.includes("/pricing");
  const isTopBgColorWhite = isFAQPage || isArticlesPage || isPricingPage;
  return (
    <div
      className={cn(
        "h-[135px] lg:h-[235px] w-full relative",
        !isTopBgColorWhite && "static-background-hard"
      )}
    >
      <div className="absolute w-full h-[27px] lg:h-[37px] -bottom-[6px] z-[2]">
        {!isTopBgColorWhite ? (
          <Image
            src="/assets/images/shape-7-copy-14.svg"
            fill
            alt="Transition"
            className="object-cover"
          />
        ) : (
          <Image
            src="/assets/images/shape-7-copy-8.svg"
            fill
            alt="Transition"
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
}

export default FooterTopBg;
