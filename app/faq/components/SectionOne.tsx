import Image from "next/image";
import Faqs from "./Faqs";

async function SectionOne({ faqCategories }: { faqCategories: any[] }) {
  return (
    <section className="relative py-[50px] lg:py-[100px]">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
        <Image
          src="/assets/images/shape-7-copy-7.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-[791px]">
          <div className="relative w-[100px] h-[25px] lg:w-[200px] lg:h-[50px] mx-auto">
            <Image
              src="/assets/images/you-got-questions@3x.webp"
              alt="You got questions"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-[40px] lg:text-[100px] text-center font-portlin uppercase tracking-[0.5px] leading-[.9] text-balance mt-[12px] lg:mt-[22px]">
            WE GOT ANSWERS
          </h1>
          <p className="text-sm lg:text-lg leading-normal mt-4 lg:mt-[40px] mb-[60px] lg:mb-[70px] text-center text-[#53545c]">
            Your logo and branding can either hold you back or allow you to
            scale your company as far as you want.
          </p>
        </div>

        <div className="flex flex-col gap-[70px]">
          {faqCategories?.map((faqCategory) => (
            <Faqs key={faqCategory._id} faqCategory={faqCategory} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
