import Image from "next/image";
import { Button } from "@/app/(shared)/components/ui/button";
import "../style.css";
import Link from "next/link";

function SectionOne({ dict, projectLink }: { dict: any; projectLink: string }) {
  return (
    <section className="relative overflow-hidden">
      {/* <div className="hidden md:block w-full max-w-[1920px] left-1/2 -translate-x-1/2 relative h-[1110px]">
        <Image
          src="/assets/images/homepage-sectionone-bg.webp"
          width="1920"
          height="958"
          alt="Homepage background"
          priority
          quality={100}
          className="object-cover h-full"
        />
        <div className="absolute z-[1] md:right-[50px]  xl:right-[354px] top-[364px]">
          <div className="absolute -left-[32px] -top-[36px] animate-wiggle">
            <Image
              src="/assets/images/homepage-sectionone-chat.png"
              width="185"
              height="100"
              alt="Chat"
              priority
              quality={100}
              className=""
            />
            <p className="-rotate-[15deg] group-[.lang-ja]:text-[23px] group-[.lang-en]:text-[16px] font-extrabold absolute top-[34px] left-[26px]">
              {dict.homePage.sectionOne.chat}
            </p>
          </div>
          <Image
            src="/assets/images/homepage-sectionone-man.webp"
            width="340"
            height="256"
            alt="Man"
            priority
            quality={100}
            className=" relative"
          />
        </div>
      </div> */}
      <div className="mx-auto w-[2560px] relative hidden lg:block">
        <Image
          src="/assets/images/homepage-sectionone-bg.webp"
          width="2560"
          height="1183"
          alt="Homepage background"
          priority
          quality={100}
          className="object-cover"
        />
      </div>

      <div className="lg:hidden">
        <Image
          src="/assets/images/homepage-sectionone-bg-mobile.webp"
          width="768"
          height="1339"
          alt="Homepage background"
          priority
          quality={100}
          className="w-full h-full object-cover"
        />
        <div className="absolute z-[1] -right-[128px] top-[217px] scale-[0.6]">
          <div className="absolute -left-[32px] -top-[36px] animate-wiggle">
            <Image
              src="/assets/images/homepage-sectionone-chat.png"
              width="185"
              height="100"
              alt="Chat"
              priority
              quality={100}
              className=""
            />
            <p className="-rotate-[15deg] group-[.lang-ja]:text-[23px] group-[.lang-en]:text-[16px] font-extrabold absolute top-[34px] left-[26px]">
              {dict.homePage.sectionOne.chat}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 container px-8 lg:px-4 mt-8 lg:mt-[88px] z-[1]">
        <h1 className="group-[.lang-ja]:block group-[.lang-en]:hidden text-[42px] md:text-[80px] font-extrabold text-[#151515] leading-none max-w-[290px] sm:max-w-none">
          想像を超える
          <br /> クリエイティブで未来を創る
        </h1>
        <h1 className="group-[.lang-ja]:hidden group-[.lang-en]:block text-[42px] md:text-[80px] font-extrabold text-[#151515] leading-none max-w-[290px] sm:max-w-none">
          Shaping the future
          <br className="hidden sm:block" /> with boundless creativity.
        </h1>
        <p className="group-[.lang-ja]:block group-[.lang-en]:hidden mt-4 sm:mt-[30px] text-[13px] xs:text-sm lg:text-base md:text-[22px] max-w-[42vw]">
          革新的なソリューションでビ
          <br className="lg:hidden" />
          ジネスを加速し、成功への道
          <br className="lg:hidden" />
          を切り拓く
        </p>
        <p className="group-[.lang-ja]:hidden group-[.lang-en]:block mt-4 sm:mt-[30px] text-[13px] xs:text-sm lg:text-base md:text-[22px] max-w-[42vw]">
          <span className="hidden sm:block">
            Accelerating businesses with innovative solutions <br /> and paving
            the way to success.
          </span>
          <span className="sm:hidden">
            Accelerating growth through innovation.
          </span>
        </p>
        <Link href={projectLink}>
          <Button className="mt-5 sm:mt-[34px]">
            {dict.homePage.sectionOne.cta}
          </Button>
        </Link>
      </div>
      <div className="absolute z-[1] bottom-[3.6%] lg:translate-x-1/2 container px-4 lg:h-[602px] w-[180%] lg:w-[1224px] -right-[35%] lg:right-1/2">
        <div className="absolute z-[1] -top-[29%] lg:-top-[25%] lg:right-[52px] w-[30%] lg:w-[28.5%] right-[11.5%]">
          <div className="absolute lg:right-[56%] right-[46%] -top-[28%] lg:-top-[16%] animate-wiggle w-[74%] lg:w-[54%]">
            <Image
              src="/assets/images/homepage-sectionone-chat.png"
              width="185"
              height="100"
              alt="Chat"
              priority
              quality={100}
              className="w-full"
            />
            <p className="-rotate-[15deg] -translate-y-1/2 top-[46%] text-sm xs:group-[.lang-ja]:text-[23px] xs:group-[.lang-en]:text-[16px] font-extrabold absolute left-[53%] -translate-x-1/2 whitespace-nowrap">
              {dict.homePage.sectionOne.chat}
            </p>
          </div>
          <Image
            src="/assets/images/homepage-sectionone-man.webp"
            width="340"
            height="256"
            alt="Man"
            priority
            quality={100}
            className="w-full relative"
          />
        </div>
        <Image
          src="/assets/images/homepage-sectionone-car.webp"
          width="1040"
          height="604"
          alt="Car"
          quality={100}
          className="object-contain z-[1] relative -left-[30px] w-[87%]"
        />
        <Image
          src="/assets/images/homepage-sectionone-minicar.webp"
          width="250"
          height="332"
          alt="Mini car"
          quality={100}
          className="object-contain z-[1] absolute w-[20.5%] bottom-[2%] lg:bottom-[22px] lg:right-[98px] right-[34%]"
        />
      </div>
      {/* <div className="h-[20px] lg:hidden" /> */}
    </section>
  );
}

export default SectionOne;
