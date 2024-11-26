import Image from "next/image";
import { Button } from "@/app/(shared)/components/ui/button";
import "../style.css";
import Link from "next/link";

function SectionOne({ dict, projectLink }: { dict: any; projectLink: string }) {
  return (
    <section className="relative overflow-hidden">
      <div className="hidden md:block w-full max-w-[1920px] left-1/2 -translate-x-1/2 relative h-[1110px]">
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
      </div>
      <div className="md:hidden h-[770px] ">
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
        <p className="group-[.lang-ja]:block group-[.lang-en]:hidden mt-4 sm:mt-[30px] text-4 md:text-[22px] max-w-[42vw]">
          革新的なソリューションでビジネスを加速し、成功への道を切り拓く
        </p>
        <p className="group-[.lang-ja]:hidden group-[.lang-en]:block mt-4 sm:mt-[30px] text-4 md:text-[22px] max-w-[42vw]">
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
      <div className="absolute z-[1] bottom-[32px] translate-x-1/2 container px-4 w-[688px] sm:w-full right-[280px] sm:right-1/2">
        <Image
          src="/assets/images/homepage-sectionone-car.webp"
          width="1040"
          height="603"
          alt="Car"
          quality={100}
          className="object-contain relative -left-[30px]"
        />
        <Image
          src="/assets/images/homepage-sectionone-minicar.webp"
          width="250"
          height="332"
          alt="Mini car"
          quality={100}
          className="object-contain absolute w-[24%] sm:w-[20.5%] bottom-[1%] sm:bottom-[22px] sm:right-[98px] right-[24%]"
        />
      </div>
      {/* <div className="h-[20px] lg:hidden" /> */}
    </section>
  );
}

export default SectionOne;
