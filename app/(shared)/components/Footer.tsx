// "use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Line from "./svg/Line";
import Link from "next/link";
import CalComModal from "./CalComModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import CalComModalTrigger from "../CalComModalTrigger";
import { BreakableText } from "./BreakableText";

export default function Footer({
  dict,
  projectLink,
}: {
  dict: any;
  projectLink: string;
}) {
  const MainList = () => (
    <ul className="lg:mt-[38px] flex flex-col gap-4 lg:gap-[20px]">
      {/* <li>
        <Link
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="/"
        >
          Home
        </Link>
      </li> */}
      <li>
        <Link
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="/#projects"
        >
          {dict.footer.projects}
        </Link>
      </li>
      {/* <li>
        <Link
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="/#services"
        >
          {dict.footer.services}
        </Link>
      </li> */}
      {/* <li>
        <Link
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="/#pricing"
        >
          {dict.footer.pricing}
        </Link>
      </li> */}
      {/* <li>
        <Link
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="/about"
        >
          About
        </Link>
      </li> */}
      <li>
        <Link
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="/#reviews"
        >
          {dict.footer.testimonials}
        </Link>
      </li>
      {/* <li>
        <Link
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="/blog"
        >
          {dict.footer.blog}
        </Link>
      </li> */}
    </ul>
  );
  const SocialList = () => (
    <ul className="lg:mt-[38px] flex flex-col gap-4 lg:gap-[20px]">
      <li>
        <a
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="https://web.facebook.com/jnellsworth"
        >
          {dict.footer.facebook}
        </a>
      </li>
      <li>
        <a
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="https://www.instagram.com/jnellsworth"
        >
          {dict.footer.instagram}
        </a>
      </li>
      <li>
        <a
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="https://www.x.com/jnellsworth_"
        >
          {dict.footer.twitter}
        </a>
      </li>
      <li>
        <a
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="https://www.linkedin.com/company/jeremy-ellsworth-designs-llc/"
        >
          {dict.footer.linkedin}
        </a>
      </li>
      <li>
        <a
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="https://www.youtube.com/@jeremyellsworthdesignsllc"
        >
          {dict.footer.youtube}
        </a>
      </li>
    </ul>
  );

  const ContactList = () => (
    <ul className="lg:mt-[38px] flex flex-col gap-4 lg:gap-[20px]">
      <li>
        {/* <CalComModalTrigger className="!px-0 !py-0 !h-auto !text-base text-secondary !bg-none"> */}
        <a
          href="#"
          className="font-bold text-center lg:text-left inline-block w-full text-secondary"
        >
          {dict.footer.contactUs}
        </a>
        {/* </CalComModalTrigger> */}
        <address className="mt-[26px] lg:mt-[20px] leading-[1.56] text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base">
          <BreakableText text={dict.footer.contactAddress} />
        </address>
      </li>
    </ul>
  );
  return (
    <footer className="relative">
      <div className="flex flex-col h-full w-full absolute">
        <div className="static-background-hard h-[43%] relative" />
        <div className="bg-primary h-[57%] relative static-background">
          <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px] before:z-[1] before:top-[12%] before:h-[86%]">
            <Image
              src="/assets/images/shape-7-copy-14.svg"
              fill
              alt="Transition"
              className="object-cover"
            />
          </div>
          <Image
            src="/assets/images/footer-circular.webp"
            alt="Circular effect"
            width="908"
            height="908"
            className="absolute left-1/2 -translate-x-1/2 -top-[58%]"
          />
        </div>
      </div>
      <div className="relative top-0 px-3">
        <div className="z-[1] mx-auto bg-[#00b3e5] relative max-w-[1354px] w-full rounded-[10px] grid grid-cols-1 gap-6 lg:gap-2 lg:grid-cols-2 px-3 py-4 pb-5 lg:px-[80px] lg:py-[60px]">
          <Image
            src="/assets/images/footer-image.webp"
            alt="Girl with bike"
            width="494"
            height="560"
            quality={100}
            className="self-center relative z-[1] lg:pr-[20px] xl:pr-0"
          />
          <Image
            src="/assets/images/gradient-fill-footer.png"
            alt="Blue gradient background"
            width="655"
            height="599"
            className="absolute"
          />
          <div className=" self-center">
            <h2 className="text-[50px] lg:text-[80px] text-white leading-none px-2 lg:px-0 group-[.lang-ja-family]:font-greycliffjpcd group-[.lang-en-family]:font-portlin lg:group-[.lang-en-family]:text-[98px] group-[.lang-ja-weight]:font-extrabold group-[.lang-en-weight]:font-regular">
              {dict.footer.title}
            </h2>
            <p className="text-white text-sm lg:text-[18px] mt-4 lg:mt-[60px] max-w-[480px] px-2 lg:px-0">
              {dict.footer.description}
            </p>
            <div className="flex flex-col xs:flex-row mt-[40px] lg:mt-[54px] gap-4 lg:gap-[26px] px-2 lg:px-0 lg:flex-col xl:flex-row">
              <Link href={projectLink} className="">
                <Button
                  variant="outline"
                  className="text-white border-white hover:border-transparent lg:px-[28px]"
                >
                  {dict.footer.ctaOne}
                </Button>
              </Link>
              <a href="https://line.me/R/ti/p/@844tbckb" target="_blank">
                <Button className="lg:text-[28px] text-primary bg-white w-full xl:w-auto lg:py-[10px] lg:px-[14px] lg:pr-[20px] gap-[20px] flex">
                  <div className="rounded-full size-[40px] lg:size-[55px] bg-[#06c755] flex items-center justify-center">
                    <Line className="w-[26px] h-[24px] lg:w-[36px] lg:h-[34px]" />
                  </div>
                  <span className="group-[.lang-ja-family]:mt-1 group-[.lang-en-family]:mt-0">
                    {dict.footer.ctaTwo}
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="z-[1] pt-[60px] lg:pt-[100px]">
          <div className="container px-4 mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <div className="relative mx-auto lg:mx-0 ">
                  <div className="relative size-[56px] lg:size-[65px] z-[1]">
                    <Image
                      src="/assets/images/je-logo.png"
                      fill
                      alt="je logo"
                      className="absolute top-0 object-contain"
                    />
                  </div>
                  <a
                    href="https://line.me/R/ti/p/@844tbckb"
                    target="_blank"
                    className="absolute cursor-pointer left-[55px] z-0 -top-[2px] size-[36px] flex items-center justify-center bg-[#06c755] rounded-full"
                  >
                    <Line className="!size-[22px]" />
                  </a>
                </div>

                <p className="text-xs lg:text-base text-center lg:text-left mt-[23px] text-white leading-[1.58]">
                  <BreakableText text={dict.footer.info} />
                </p>
                <div className="mt-[24px] lg:mt-[34px] flex flex-col lg:flex-row lg:items-center gap-[20px] lg:gap-[40px]">
                  {/* <div className="flex gap-[18px]">
                  <Image
                    src="/assets/images/217450@3x.webp"
                    height="39"
                    width="39"
                    alt="Better Business Bureau Accredited"
                    className="shrink-0 object-contain"
                  />

                  <p className="text-white font-portlin uppercase tracking-[0.5px] text-sm lg:text-[17px] leading-[1.09] font-medium whitespace-nowrap">
                    BETTER BUSINESS BUREAU
                    <br />
                    ACCREDITED
                  </p>
                </div> */}

                  <div className="flex gap-[14px] lg:gap-[18px] flex-col lg:flex-row items-center">
                    {/* <Image
                      src="/assets/images/layer-3@3x.webp"
                      height="39"
                      width="39"
                      alt="Better Business Bureau Accredited"
                      className="shrink-0 object-contain"
                    />
                    <a
                      href="https://www.nhcompanyregistry.com/companies/jeremy-ellsworth-designs-llc/"
                      target="_blank"
                    > */}
                    <p className="text-white text-center  lg:text-left group-[.lang-ja-family]:font-greycliffjpcd group-[.lang-en-family]:font-portlin group-[.lang-ja-weight]:font-extrabold group-[.lang-en-weight]:font-regular uppercase  tracking-[0.5px] text-sm lg:text-[17px] leading-[1.09] font-medium">
                      {/* NEW HAMPSHIRE
                        <br /> REGISTERED
                        <span className="lg:hidden">LLC BUSINESS</span> */}
                      <BreakableText text={dict.footer.registered} />
                    </p>
                    {/* </a> */}
                  </div>
                </div>
              </div>
              <div className="hidden lg:grid grid-cols-3 mt-10 lg:mt-0">
                <div>
                  <h2 className="text-white uppercase tracking-[0.5px] text-lg lg:text-[30px] group-[.lang-ja-family]:font-greycliffjpcd group-[.lang-en-family]:font-portlin group-[.lang-ja-weight]:font-extrabold group-[.lang-en-weight]:font-regular">
                    {dict.footer.links}
                  </h2>
                  <MainList />
                </div>
                <div>
                  <h2 className="text-white font-portlin uppercase tracking-[0.5px] text-lg lg:text-[30px] group-[.lang-ja-family]:font-greycliffjpcd group-[.lang-en-family]:font-portlin group-[.lang-ja-weight]:font-extrabold group-[.lang-en-weight]:font-regular">
                    {dict.footer.follow}
                  </h2>
                  <SocialList />
                </div>
                <div>
                  <h2 className="text-white font-portlin uppercase tracking-[0.5px] text-lg lg:text-[30px] group-[.lang-ja-family]:font-greycliffjpcd group-[.lang-en-family]:font-portlin group-[.lang-ja-weight]:font-extrabold group-[.lang-en-weight]:font-regular">
                    {dict.footer.contact}
                  </h2>
                  <ContactList />
                </div>
              </div>

              <Accordion
                type="single"
                collapsible
                className="w-full mt-[40px] lg:hidden"
              >
                <AccordionItem
                  value="main"
                  className="border-[#252534] border-b-0"
                >
                  <AccordionTrigger className="text-white border-[#252534] text-[30px] border-t border-b-0 font-normal py-[24px] px-0 leading-none !no-underline lg:text-[50px]">
                    <span className="group-[.lang-ja-family]:font-greycliffjpcd group-[.lang-en-family]:font-portlin group-[.lang-ja-weight]:font-extrabold group-[.lang-en-weight]:font-regular uppercase tracking-[0.5px] leading-none whitespace-nowrap w-[30%]">
                      {dict.footer.links}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="p-0 overflow-visible pb-[24px]">
                    <MainList />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="social"
                  className="border-[#252534] border-b-0"
                >
                  <AccordionTrigger className="text-white border-[#252534] text-[30px] border-t border-b-0 font-normal py-[24px] px-0 leading-none !no-underline lg:text-[50px]">
                    <span className="group-[.lang-ja-family]:font-greycliffjpcd group-[.lang-en-family]:font-portlin group-[.lang-ja-weight]:font-extrabold group-[.lang-en-weight]:font-regular uppercase tracking-[0.5px] leading-none whitespace-nowrap w-[30%]">
                      {dict.footer.follow}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="p-0 overflow-visible pb-[24px]">
                    <SocialList />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="contact" className="border-[#252534]">
                  <AccordionTrigger className="text-white border-[#252534] text-[30px] border-t border-b-0 font-normal py-[24px] px-0 leading-none !no-underline lg:text-[50px]">
                    <span className="group-[.lang-ja-family]:font-greycliffjpcd group-[.lang-en-family]:font-portlin group-[.lang-ja-weight]:font-extrabold group-[.lang-en-weight]:font-regular uppercase tracking-[0.5px] leading-none whitespace-nowrap w-[30%]">
                      {dict.footer.contact}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="p-0 overflow-visible pb-[24px]">
                    <ContactList />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="lg:border-t lg:border-[#252534] lg:mt-[88px]">
            <div className="relative z-[1] container px-4 text-[#666770] text-xs flex flex-col lg:flex-row text-center lg:text-left justify-between py-[40px]">
              <span>{dict.footer.copyright}</span>
              <span className="mt-4 lg:mt-0">
                <Link href="/">{dict.footer.faq}</Link> •{" "}
                <Link href="/">{dict.footer.privacyPolicy}</Link> •{" "}
                <Link href="/">{dict.footer.usersAgreement}</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
