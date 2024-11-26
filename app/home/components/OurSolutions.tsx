"use client";

import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "../style.css";
import "react-medium-image-zoom/dist/styles.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/(shared)/components/ui/accordion";
import { Button } from "@/app/(shared)/components/ui/button";
import { useRef, useState } from "react";
import { Thumbs } from "swiper/modules";
import { SliderFullScreen } from "@/app/(shared)/components/slider-full-screen/SliderFullScreen";
import PortableText from "react-portable-text";
import CalComModal from "@/app/(shared)/components/CalComModal";

function SolutionImagesMobile({ images }: { images: any[] }) {
  const [isShowMore, setIsShowMore] = useState(false);
  const [isOpenSliderFullScreen, setIsOpenSliderFullScreen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const toggleShowMore = () => {
    setIsShowMore((prevState) => !prevState);
  };
  const handleImageClick = (slideIndex: number) => {
    setCurrentSlideIndex(slideIndex);
    setIsOpenSliderFullScreen(true);
  };
  const imagesToShow = isShowMore ? images : images.slice(0, 4);

  return (
    <>
      <div className="lg:hidden">
        <ul className="grid grid-cols-2 gap-3 mt-[24px]">
          {imagesToShow.map((image: any, i: number) => (
            <li
              key={i}
              onClick={() => handleImageClick(i)}
              className="relative pb-[82.5%] rounded-[5px]"
            >
              <Image
                src={urlForImage(image)}
                fill
                alt="Solution image"
                className="rounded-[6px] w-full h-full object-cover"
                quality={100}
              />
            </li>
          ))}
        </ul>
        <Button
          onClick={toggleShowMore}
          variant="ghost"
          className="w-full my-[18px]"
        >
          {isShowMore ? "SHOW LESS" : "SHOW MORE"}
        </Button>
      </div>
      <SliderFullScreen
        isOpen={isOpenSliderFullScreen}
        setIsOpen={setIsOpenSliderFullScreen}
        images={images}
        currentIndex={currentSlideIndex}
      />
    </>
  );
}

function OurSolutions({ ourSolutions }: { ourSolutions: any[] }) {
  const swiperRef = useRef<any>();
  const [isOpenSliderFullScreen, setIsOpenSliderFullScreen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const handleImageClick = (slideIndex: number) => {
    setIsOpenSliderFullScreen(true);
    setCurrentSlideIndex(slideIndex);
  };

  return (
    <section
      id="solutions"
      className="relative pt-[53px] pb-[63px] lg:pt-[140px] lg:pb-[113px]"
    >
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px] before:z-[1] before:top-[12%] before:h-[86%]">
        <Image
          src="/assets/images/shape-7-copy-7.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container px-4 mx-auto relative z-[1]">
        <div>
          <h1 className="text-[50px] lg:text-[100px] font-portlin uppercase tracking-[0.5px] leading-[0.9] text-balance">
            OUR SOLUTIONS
          </h1>

          <p className="text-sm lg:text-lg leading-normal mt-[25px] lg:mt-[40px] mb-0 lg:mb-[70px] max-w-[452px]">
            We are your full-stack, five-star creative design agency ready to
            tackle any job you have for us.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full mt-[40px]"
          defaultValue="1"
        >
          {ourSolutions?.map((solution, i) => (
            <AccordionItem
              key={i}
              value={String(i)}
              className="border-[#efefef] border-b-0 last:border-b data-[state=closed]:[&_*_button]:text-[#adadad]"
            >
              <AccordionTrigger className="border-[#efefef] text-[30px] lg:h-[149px] border-t border-b-0 font-normal py-[28px] px-0 lg:!pl-0 leading-none !no-underline lg:text-[50px]">
                <span className="font-portlin uppercase tracking-[0.5px] leading-none whitespace-nowrap w-[30%]">
                  {solution.name}
                </span>
                {solution.description && (
                  <PortableText
                    content={solution.description}
                    className="hidden lg:block text-sm leading-normal lg:text-lg pl-[116px] pr-[90px] line-clamp-2 w-[70%] [&_*_a]:underline"
                  />
                )}
              </AccordionTrigger>
              <AccordionContent className="p-0 overflow-visible pb-[24px]">
                {solution.description && (
                  <PortableText
                    content={solution.description}
                    className="lg:hidden text-sm lg:text-lg leading-normal [&_*_a]:underline"
                  />
                )}
                {solution.images && (
                  <div className="relative hidden lg:block">
                    <Swiper
                      onSwiper={setThumbsSwiper as any}
                      loop
                      spaceBetween={22}
                      slidesPerView={4}
                      onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                      }}
                      modules={[Thumbs]}
                      className="w-full"
                    >
                      {solution.images.map((image: any, i: number) => (
                        <SwiperSlide key={i}>
                          {/* <Zoom> */}
                          <div
                            onClick={() => handleImageClick(i)}
                            className="relative pb-[82.5%] rounded-[6px] cursor-zoom-in"
                          >
                            <Image
                              src={urlForImage(image)}
                              fill
                              alt={solution.name}
                              className="lg:rounded-[8px] absolute w-full h-full object-cover"
                              quality={100}
                            />
                          </div>
                          {/* </Zoom> */}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    {solution.images && solution.images.length > 4 && (
                      <div className="our-solution-nav absolute top-1/2 w-full">
                        <button
                          aria-label="Previous"
                          className="swiper-button-prev"
                          onClick={() => swiperRef.current?.slidePrev()}
                        ></button>
                        <button
                          aria-label="Next"
                          className="swiper-button-next"
                          onClick={() => swiperRef.current?.slideNext()}
                        ></button>
                      </div>
                    )}
                  </div>
                )}
                {solution.images && (
                  <SolutionImagesMobile images={solution.images} />
                )}
                <SliderFullScreen
                  isOpen={isOpenSliderFullScreen}
                  setIsOpen={setIsOpenSliderFullScreen}
                  images={solution.images}
                  thumbsSwiper={thumbsSwiper}
                  currentIndex={currentSlideIndex}
                />
                <div className="lg:flex lg:gap-[122px] lg:justify-between lg:items-center  lg:mt-[52px]">
                  {solution.content && (
                    <PortableText
                      content={solution.content}
                      className="text-sm leading-normal lg:text-lg"
                    />
                  )}
                  {solution.button?.isCalCom ? (
                    <CalComModal.Trigger>
                      <Button
                        className="w-full lg:w-auto mt-[24px] lg:mt-0"
                        variant="secondary"
                      >
                        {solution.button?.text || "GET A QUOTE"}
                      </Button>
                    </CalComModal.Trigger>
                  ) : solution.button?.link ? (
                    <Button
                      className="w-full lg:w-auto mt-[24px] lg:mt-0"
                      variant="secondary"
                    >
                      {solution.button?.text || "GET A QUOTE"}
                    </Button>
                  ) : null}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {/* <div className="absolute w-full h-[27px] lg:h-[37px] -bottom-[6px] z-[1]">
        <Image
          src="/assets/images/shape-7-copy-8.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div> */}
    </section>
  );
}

export default OurSolutions;
