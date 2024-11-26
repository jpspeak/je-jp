import Image from "next/image";

function Header({ articleLink }: { articleLink: string }) {
  return (
    <header className="bg-[#004eed] pt-[30px] pb-4 lg:pt-[68px] lg:pb-0 relative static-background">
      <div className="container lg:px-4 relative text-white">
        <h1 className="text-[60px] lg:text-[100px] text-white font-portlin uppercase tracking-[0.5px] leading-[.9]">
          CREATIVE BRAND <br />
          <span className="text-[#fff500]">PACKAGE</span>
        </h1>
        <p className="hidden lg:block text-white leading-normal bottom-2 text-sm lg:text-lg lg:absolute left-[320px] mt-6 lg:mt-0 max-w-[800px]">
          Remember, good work isn&apos;t cheap and cheap work isn&apos;t good.
          Here at Jeremy Ellsworth Designs, we want to remind you of that when
          considering your brands value.
        </p>
      </div>
      <div className="container mt-[10px] lg:mt-[26px]">
        <div className="flex gap-4 lg:gap-[27px] items-end">
          <div className="relative size-[100px] lg:size-[120px] shrink-0 top-[18px] lg:top-[12px]">
            <Image
              src="/assets/images/vector-smart-object@3x.webp"
              fill
              alt="hoffman-heating-cooling-v-2-mascot"
              className="object-contain"
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:gap-[14px] border-t border-[#3D5FFF] relative z-[1]">
            <p className="text-white leading-normal text-xs lg:text-lg font-bold pt-4 pb-1 lg:py-[32px]">
              Hoffman Heating and Cooling revenue increased by 225% since
              rebranding
            </p>
            <div className="flex items-center gap-[14px]">
              <div className="h-[1px] lg:h-[2px] w-2 lg:w-[32px] bg-white opacity-50" />
              <a
                href={articleLink}
                className="text-[#ffed00] whitespace-nowrap leading-relaxed text-xs lg:text-sm font-medium font-mona-sans"
              >
                Read Article
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
