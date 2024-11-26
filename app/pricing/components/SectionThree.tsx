import ProjectItem from "@/app/home/components/ProjectItem";
import Image from "next/image";

function SectionThree({ projects }: { projects: any[] }) {
  return (
    <section
      id="package"
      className="relative pt-[70px] lg:pt-[140px] bg-[#f9f8f3] static-background-hard"
    >
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px] static-background-hard before:z-[1] before:top-[12%] before:h-[86%]">
        <Image
          src="/assets/images/shape-7-copy-7-1.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container px-4 mx-auto relative z-[1]">
        <h1 className="text-[50px] lg:text-[100px] font-portlin uppercase tracking-[0.5px] leading-[0.9] text-balance">
          FEATURED PROJECTS
        </h1>
        <p className="text-sm leading-normal lg:text-lg mt-[30px] lg:mt-[40px]">
          Dive into our world of vibrant, tailor-made designs. From wizards to
          warriors, trees to tanks, we transform ideas into unforgettable visual
          identities. <strong>Ready to stand out in your industry?</strong>{" "}
          Let&apos;s create your next game-changing logo!
        </p>

        {projects && (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-[30px] mt-[30px] lg:mt-[54px]">
            {projects.map((project, i) => (
              <div
                key={i}
                className="flex overflow-hidden rounded-[6px] lg:rounded-[8px] last:hidden lg:last:flex"
              >
                <ProjectItem key={i} project={project} />
              </div>
            ))}
          </div>
        )}

        {/* <div className="grid grid-cols-1 lg:grid-cols-3 pt-[60px] lg:gap-[35px]">
          <div className="pt-[40px] relative">
            <div className="bg-[#f5f5f5] rounded-[15px] w-full h-full relative">
              <div className="invisible rounded-[15px] w-full flex flex-col items-center px-[70px] py-[45px]">
                <span className="text-[74px] font-portlin uppercase tracking-[0.5px] leading-[.9] text-white">
                  BRANDING
                </span>
                <span className="text-[74px] font-portlin uppercase tracking-[0.5px] leading-[.9] text-white">
                  BRANDING
                </span>
                <span className="text-[74px] font-portlin uppercase tracking-[0.5px] leading-[.9] text-white">
                  BRANDING
                </span>
                <span className="text-[74px] font-portlin uppercase tracking-[0.5px] leading-[.9] text-white">
                  BRANDING
                </span>
                <span className="text-[74px] font-portlin uppercase tracking-[0.5px] leading-[.9] text-white">
                  BRANDING
                </span>
                <span className="text-[74px] font-portlin uppercase tracking-[0.5px] leading-[.9] text-white">
                  BRANDING
                </span>
                <span className="text-[74px] font-portlin uppercase tracking-[0.5px] leading-[.9] text-white">
                  BRANDING
                </span>
              </div>
              <div className="rounded-t-[15px] bg-gradient-to-b from-[#ff0000] h-[50%] w-full absolute top-0 left-0" />
              <div className="absolute rounded-[15px] top-0 left-0 z-[2] w-full flex flex-col items-center px-[70px] py-[45px]">
                <span className="text-[74px] font-portlin uppercase tracking-[0.5px] leading-[.9] text-white">
                  BRANDING
                </span>
                <span className="text-[74px] font-portlin uppercase tracking-[0.5px] leading-[.9] text-white">
                  BRANDING
                </span>
                <span className="text-[74px] font-portlin uppercase tracking-[0.5px] leading-[.9] text-white">
                  BRANDING
                </span>
                <span className="text-[74px] font-portlin uppercase tracking-[0.5px] leading-[.9] text-white">
                  BRANDING
                </span>
                <span className="text-[74px] font-portlin uppercase tracking-[0.5px] leading-[.9] text-white">
                  BRANDING
                </span>
                <span className="text-[74px] font-portlin uppercase tracking-[0.5px] leading-[.9] text-white">
                  BRANDING
                </span>
                <span className="text-[74px] font-portlin uppercase tracking-[0.5px] leading-[.9] text-white">
                  BRANDING
                </span>
              </div>
            </div>
            <div className="h-full w-full absolute z-[10] top-0 left-1/2 transform -translate-x-1/2">
              <Image
                src="/assets/images/naked-pose-1-8-k-1@3x.png"
                fill
                alt="Exposing the truth"
                className="object-contain"
              />
              <span className="font-guthen-bloots-personal-use text-2xl text-white absolute bottom-[29%] transform right-1/2">
                play
              </span>
              <div className="absolute left-[38%] bottom-[20%] h-[46px] w-[65px] flex items-center justify-center">
                <Image
                  src="/assets/images/youtube-logo.webp"
                  alt="Youtube logo"
                  fill
                  className="absolute w-full h-full text-[#ff0000]"
                />
                <div className="bg-white size-[30px]" />
              </div>
            </div>
          </div>
          <div className="pt-[40px] col-span-2">
            <div className="relative bg-primary w-full h-full rounded-[15px] grid lg:grid-cols-2">
              <div className="flex flex-col items-center p-4 lg:py-[48px] lg:px-[52px]">
                <div className="relative w-[46px] h-[28px] lg:w-[66px] lg:h-[38px] mx-auto">
                  <Image
                    src="/assets/images/infinite.webp"
                    alt="Infinite"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="rounded-full font-bold border px-4 py-1 border-[#fff500] text-white mt-[23px]">
                  Infinite Package
                </p>
                <span className="leading-[.9] mt-[46px] text-white text-[100px] font-portlin uppercase tracking-[0.5px] -rotate-[5deg]">
                  $9728
                </span>
                <span className="text-secondary -rotate-[5deg] mt-[10px] font-medium">
                  Complete Branding
                </span>
                <Button variant="secondary" className="mt-[50px] w-full">
                  ORDER NOW
                </Button>
                <p className="mt-4 lg:mt-[33px] text-[#a7a7bc] text-center">
                  This is a one time payment for our complete brand package.
                </p>
              </div>
              <div className="relative w-full h-full p-4">
                <div className="lg:pr-[50px] lg:absolute h-full">
                  <div className="group z-1 relative has-[:checked]:h-max overflow-hidden lg:-translate-y-[35px] lg:ml-0 bg-secondary rounded-[15px] lg:h-[115%] p-6 lg:py-[66px] lg:px-[62px]">
                    <h2 className="text-[40px] lg:text-[80px] leading-[.88] font-portlin uppercase tracking-[0.5px]">
                      INFINITE BRAND PACKAGE
                    </h2>
                    <ul className="flex max-h-[250px] group-has-[:checked]:max-h-full peer lg:max-h-full flex-col pb-[40px] gap-2 lg:gap-3 mt-[40px] lg:mt-[47px] text-xs lg:text-base font-medium">
                      <li className="flex items-start lg:items-center gap-2 lg:gap-4">
                        <HiCheckCircle className="size-[20px] shrink-0" />
                        Infinite Design Requests
                      </li>
                      <li className="flex items-start lg:items-center gap-2 lg:gap-4">
                        <HiCheckCircle className="size-[20px] shrink-0" />
                        Infinite Design Requests
                      </li>
                      <li className="flex items-start lg:items-center gap-2 lg:gap-4">
                        <HiCheckCircle className="size-[20px] shrink-0" />
                        Infinite Design Requests
                      </li>
                      <li className="flex items-start lg:items-center gap-2 lg:gap-4">
                        <HiCheckCircle className="size-[20px] shrink-0" />
                        Infinite Design Requests
                      </li>
                      <li className="flex items-start lg:items-center gap-2 lg:gap-4">
                        <HiCheckCircle className="size-[20px] shrink-0" />
                        Infinite Design Requests
                      </li>
                      <li className="flex items-start lg:items-center gap-2 lg:gap-4">
                        <HiCheckCircle className="size-[20px] shrink-0" />
                        Infinite Design Requests
                      </li>
                      <li className="flex items-start lg:items-center gap-2 lg:gap-4">
                        <HiCheckCircle className="size-[20px] shrink-0" />
                        Infinite Revisions
                      </li>
                      <li className="flex items-start lg:items-center gap-2 lg:gap-4">
                        <HiCheckCircle className="size-[20px] shrink-0" />
                        Infinite Brands
                      </li>
                      <li className="flex items-start lg:items-center gap-2 lg:gap-4">
                        <HiCheckCircle className="size-[20px] shrink-0" />1
                        requests at a time
                      </li>
                      <li className="flex items-start lg:items-center gap-2 lg:gap-4">
                        <HiCheckCircle className="size-[20px] shrink-0" />
                        Priority support
                      </li>
                      <li className="flex items-start lg:items-center gap-2 lg:gap-4">
                        <HiCheckCircle className="size-[20px] shrink-0" />
                        2-3 day turnaround time
                      </li>
                      <li className="flex items-start lg:items-center gap-2 lg:gap-4">
                        <HiCheckCircle className="size-[20px] shrink-0" />
                        Pause or cancel anytime
                      </li>
                    </ul>
                    <div className="has-[:checked]:before:hidden before:absolute before:bg-[linear-gradient(rgba(255,0,0,0),#fff700)] before:w-full before:h-[100px] before:bottom-[100%] before:left-0 flex bg-secondary justify-center pt-4 pb-[34px] absolute left-0 bottom-0 w-full">
                      <input
                        type="checkbox"
                        id="expand"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="expand"
                        className="inline-block cursor-pointer peer-checked:hidden text-sm lg:text-base font-medium border-b border-primary leading-none"
                      >
                        Expand
                      </label>
                      <label
                        htmlFor="expand"
                        className="hidden cursor-pointer peer-checked:inline-block text-sm lg:text-base font-medium border-b border-primary leading-none"
                      >
                        Shrink
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[791px] mt-[80px]">
          <div className="relative w-[90px] h-[25px] lg:w-[164px] lg:h-[46px] mx-auto">
            <Image
              src="/assets/images/custom-tailored@3x.webp"
              alt="Your industry peers"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-[40px] lg:text-[100px] text-center font-portlin uppercase tracking-[0.5px] leading-[.9] text-balance mt-[12px] lg:mt-[22px]">
            BRAND SOLUTION
          </h2>
          <p className="mx-auto text-center text-sm lg:text-lg mt-[30px] lg:mt-[40px] text-muted-foreground max-w-[460px]">
            Interested in a tailored package designed specifically to your
            business? <a className="font-bold">Schedule a call with us today</a>
          </p>
          <div className="flex justify-center mt-[48px]">
            <Button variant="outline">SCHEDULE CALL</Button>
          </div>
        </div> */}
      </div>
      {/* <div className="absolute w-full h-[27px] lg:h-[37px] -bottom-[6px]">
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

export default SectionThree;
