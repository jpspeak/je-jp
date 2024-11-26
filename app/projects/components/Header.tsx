import Image from "next/image";

function Header({ articleLink }: { articleLink: string }) {
  return (
    <header className="bg-[#00be5e] pt-[30px] pb-4 lg:pt-[68px] lg:pb-0 relative static-background">
      <div className="container lg:px-4 relative text-white">
        <h1 className="text-[60px] lg:text-[100px] text-white font-portlin uppercase tracking-[0.5px] leading-[.9]">
          AWESOME <span className="text-[#fff500]">BRAND</span> <br /> STUDIES
        </h1>
        <p className="hidden lg:block text-white text-sm lg:text-lg leading-normal lg:absolute bottom-2 left-[320px] mt-6 lg:mt-0">
          We are more than just a team. We are a creative family, united by our
          passion for design and our commitment to helping our clients stand out
          from the competition.
        </p>
      </div>
      <div className="container mt-[10px] lg:mt-[26px]">
        <div className="flex gap-4 lg:gap-[27px] items-end">
          <div className="relative size-[90px] lg:size-[120px] shrink-0 top-[15px] lg:top-[4px]">
            <Image
              src="/assets/images/hoffman-heating-cooling-v-2-mascot@3x.webp"
              fill
              alt="hoffman-heating-cooling-v-2-mascot"
              className="object-contain"
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:gap-[14px] border-t border-[#2bd06b] relative z-[1]">
            <p className="text-white text-xs lg:text-lg leading-normal font-bold pt-4 pb-1 lg:py-[32px]">
              Copeland Home Services revenue increased by 200% since rebranding
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
