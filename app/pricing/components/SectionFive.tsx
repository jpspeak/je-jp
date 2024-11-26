"use client";

import Image from "next/image";
import CalComModal from "@/app/(shared)/components/CalComModal";
import { Button } from "@/app/(shared)/components/ui/button";
import { useState } from "react";
import { cn } from "@/app/(shared)/lib/utils";
import { HiCheckCircle } from "react-icons/hi2";

const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100%"
        height="100%"
        color="currentColor"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3zm11.5 5.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm4.57 8.25c.643 0 1.288.106 1.93.32V20h-4.517a10.902 10.902 0 0 0-1.01-2.146c1.184-.747 2.396-1.109 3.593-1.104h.004zM4 13.752V20h9.882a9.76 9.76 0 0 0-3.142-4.07C8.842 14.485 6.455 13.71 4 13.753z"
          fill="currentColor"
        />
      </svg>
    ),
    name: "BRANDING/LOGO DESIGNS",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100%"
        height="100%"
        color="currentColor"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.75 3a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 .75.75v5.25H1.75V3zm0 18V9.75h19.5V21a.75.75 0 0 1-.75.75h-18a.75.75 0 0 1-.75-.75zM7.5 4.25h-2v2h2v-2zm4 0h-2v2h2v-2z"
          fill="currentColor"
        />
      </svg>
    ),
    name: "WEB/APP/LANDING DESIGN & DEV.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100%"
        height="100%"
        color="currentColor"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.25 17.89a4.14 4.14 0 1 1 7.635 2.221l1.365 1.367-1.274 1.272-1.363-1.366a4.14 4.14 0 0 1-6.363-3.494zm4.14-2.34a2.34 2.34 0 1 0 0 4.68 2.34 2.34 0 0 0 0-4.68z"
          fill="currentColor"
        />
        <path
          d="M1.5 1.25A.75.75 0 0 0 .75 2v4.25h19.5V2a.75.75 0 0 0-.75-.75h-18z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.25 7.75H.75V20c0 .414.336.75.75.75h12.027a5.64 5.64 0 0 1 6.723-8.186V7.75zM7.5 13h-2v-1.5h2V13zm6.62 0H9.5v-1.5h4.62V13zM7.5 17h-2v-1.5h2V17zm4.543 0H9.5v-1.5h2.543V17z"
          fill="currentColor"
        />
      </svg>
    ),
    name: "SEO/MARKETING MANAGEMENT",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100%"
        height="100%"
        color="currentColor"
        fill="none"
      >
        <path
          d="M13.738 4.15c2.42-1.815 5.408-2.4 7.762-2.4h.75v.75c0 1.403-.298 2.866-1.003 4.004-.47.76-1.126 1.375-1.97 1.713l.504.502a.75.75 0 0 1 0 1.061c-2.892 2.892-5.87 4.513-8.927 4.701.46-1.095 1.13-1.99 1.81-2.694a10.792 10.792 0 0 1 1.687-1.418 8.91 8.91 0 0 1 .73-.445l.005-.003-.335-.671a43.06 43.06 0 0 0-.337-.67h-.002l-.005.003-.016.009a4.119 4.119 0 0 0-.24.132c-.158.09-.38.225-.642.403-.524.356-1.223.893-1.923 1.618-.763.79-1.536 1.814-2.082 3.079a.75.75 0 0 0 .746.676c.202 0 .403-.006.604-.019a7.713 7.713 0 0 0-.604 3.019h-1.5c0-1.396.298-2.62.754-3.677a.753.753 0 0 1-.004-.073c0-4.714 1.783-7.758 4.238-9.6z"
          fill="currentColor"
        />
        <path
          d="M21.25 21.5a.75.75 0 0 1-.75.75h-18a.75.75 0 0 1-.75-.75v-18a.75.75 0 0 1 .75-.75h10.613c-.092.065-.184.132-.275.2-2.818 2.114-4.756 5.601-4.832 10.57a10.7 10.7 0 0 0-.756 3.98 1.5 1.5 0 0 0 1.5 1.5h1.5a1.5 1.5 0 0 0 1.5-1.5c0-.59.077-1.132.21-1.63 3.166-.48 6.129-2.276 8.882-5.029a2.25 2.25 0 0 0 .408-.559V21.5z"
          fill="currentColor"
        />
      </svg>
    ),
    name: "CONTENT/BLOG COPYWRITING",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100%"
        height="100%"
        color="currentColor"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V3zM9.5 13.25V7h-2v6.25H6.25v4.5h4.5v-4.5H9.5zm3.75-7h4.5v4.5H16.5V17h-2v-6.25h-1.25v-4.5z"
          fill="currentColor"
        />
      </svg>
    ),
    name: "SOCIAL MEDIA MANAGEMENT",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100%"
        height="100%"
        color="currentColor"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.25 2.25h15.323l-.089.234L14 3.428v3.144l2.484.944.944 2.484h3.144l.944-2.484.234-.089V22.75H1.25V2.25zM16 12.5l-7.5-4v8l7.5-4z"
          fill="currentColor"
        />
        <path
          d="M18.299 1.25H19.7l.258.695c.36.976.476 1.24.666 1.43.19.19.454.305 1.43.666l.695.258V5.7l-.695.258c-.976.36-1.24.476-1.43.665-.19.19-.305.455-.666 1.43l-.258.696H18.3l-.258-.695c-.36-.976-.476-1.24-.666-1.43-.19-.19-.454-.305-1.43-.666L15.25 5.7V4.3l.695-.258c.976-.36 1.24-.476 1.43-.665.19-.19.305-.455.666-1.43l.258-.696z"
          fill="currentColor"
        />
      </svg>
    ),
    name: "VIDEO EDITING/ THUMBNAIL",
  },
];

const packages = [
  {
    name: "Standard",
    packageItems: [
      "One request at a time",
      "One brand",
      "Infinite revisions",
      "Infinite design requests",
      "Infinite stock photos",
      "Pause or cancel anytime",
    ],
    pricePerMonth: "$2999",
  },
  {
    name: "Shock",
    packageItems: [
      "Two requests at a time",
      "Infinite brands",
      "Infinite revisions",
      "Infinite design requests",
      "Infinite stock photos",
      "Pause or cancel anytime",
    ],
    pricePerMonth: "$4999",
  },
];

function SectionFive() {
  const [selectedPckg, setSelectedPckg] = useState(packages[0]);

  const handleToggleClick = (pckgName: string) => {
    setSelectedPckg(packages.find((p) => p.name === pckgName) || packages[0]);
  };
  return (
    <section id="package" className="relative py-[70px] lg:py-[140px]">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
        <Image
          src="/assets/images/shape-7-copy-7.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container px-4 mx-auto">
        <h1 className="text-[50px] lg:text-[100px] font-portlin uppercase tracking-[0.5px] leading-[0.9] text-balance max-w-[630px]">
          IGNITE YOUR BRANDS POTENTIAL!
        </h1>
        <p className="text-sm leading-normal lg:text-lg mt-[30px] lg:mt-[42px] text-muted-foreground max-w-[702px]">
          Replace your unreliable freelancer for one flat monthly fee, with an
          infinite everything membership that is sure to get you everything you
          need!
        </p>

        <div className="bg-primary lg:bg-white flex flex-col lg:flex-row rounded-[8px] text-white mt-[30px] lg:mt-[60px] lg:gap-[30px] justify-between">
          {/* Card */}
          <div className="relative lg:max-w-[810px] lg:bg-[#141423] p-6 lg:py-[48px] lg:px-[40px] rounded-[6px] lg:rounded-[15px]">
            <h2 className="text-[45px] lg:text-[79.8px] font-portlin uppercase tracking-[0.5px] leading-[.88]">
              INFINITE EVERYTHING MEMBERSHIP
            </h2>

            {/* Service lists */}
            <ul className="grid grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-[20px] mt-[30px] lg:mt-[55px]">
              {services.map((service) => (
                <li key={service.name} className="pb-[82.6%] relative">
                  <div className="rounded-[6px] lg:rounded-[8px] bg-[#262635] w-full h-full absolute p-3 lg:p-[27px] flex flex-col justify-between gap-1">
                    <span className="text-secondary -rotate-[6deg] size-8 lg:size-[38px] mt-2 lg:mt-5">
                      {service.icon}
                    </span>

                    <p className="text-lg lg:text-[26.3px] font-portlin uppercase tracking-[0.5px] leading-[1.07]">
                      {service.name}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xs lg:text-[15px] text-[#a7a7bc] mt-[30px] lg:mt-[48px] flex gap-[10px] lg:items-center justify-center">
              <span className="text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28 26"
                  width="14px"
                  height="13px"
                  className="mt-1 w-[10px] h-[9px] lg:w-[14px] lg:h-[13px]"
                >
                  <path
                    fillRule="evenodd"
                    fill="#FFF500"
                    d="M6.748 25.045c.725.617 1.393.505 1.951-.168l5.629-6.786 5.63 6.786c.557.673 1.226.785 1.95.168l3.345-2.748c.724-.617.724-1.29.167-1.963l-4.738-5.721 6.243-3.645c.78-.449.947-1.178.501-1.963l-2.118-3.646c-.446-.785-1.17-.954-1.95-.505L17.84 8.051V1.433c0-.898-.502-1.402-1.394-1.402H12.21c-.892 0-1.393.504-1.393 1.402v6.618L5.299 4.798c-.78-.449-1.505-.224-1.951.561L1.23 9.005c-.446.785-.279 1.514.502 1.963l6.242 3.645-4.737 5.721c-.558.729-.558 1.346.167 1.963l3.344 2.748z"
                  />
                </svg>
              </span>
              Everything you need to ensure you brand has the best chances of
              succeeding!
            </p>

            <Image
              src="/assets/images/infinite-everything.webp"
              alt="infinite everything membership"
              width={102}
              height={90}
              className="absolute bottom-0 hidden lg:block"
            />
          </div>

          {/* Package Details */}
          <div className="relative w-full mt-1 lg:max-w-[360px] h-full px-6 lg:px-0 pb-[30px] lg-pb-0">
            <div className="flex flex-col z-[1] lg:-translate-y-[132px] lg:left-0 lg:absolute w-full h-min rounded-[6px] lg:rounded-[15px] bg-secondary text-primary p-[30px] lg:p-[40px] max-w-[360px]">
              {/* Subscription toggle button */}
              <div className="cursor-pointer rounded-full border border-primary p-1 flex relative ">
                <div className="w-full">
                  <div
                    className={cn(
                      "w-1/2 h-[48px] lg:h-[57px] rounded-full bg-primary transition-all shadow-[4.3px_4.9px_14.5px_0_rgba(0,0,0,0.35)] ",
                      selectedPckg.name === "Shock" && "translate-x-full"
                    )}
                  />
                </div>
                <div className="top-0 absolute grid grid-cols-2 w-full h-full">
                  <span
                    onClick={() => handleToggleClick("Standard")}
                    className={cn(
                      "font-medium lg:text-lg lg:leading-none text-center flex items-center justify-center",
                      selectedPckg.name === "Standard"
                        ? "text-primary-foreground"
                        : "text-primary"
                    )}
                  >
                    Standard
                  </span>
                  <span
                    onClick={() => handleToggleClick("Shock")}
                    className={cn(
                      "relative font-medium lg:text-lg lg:leading-none text-center flex items-center justify-center",
                      selectedPckg.name === "Shock"
                        ? "text-primary-foreground"
                        : "text-primary"
                    )}
                  >
                    <span className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="21"
                        height="21"
                        color="currentColor"
                        fill="none"
                        className="absolute -left-[24px]"
                      >
                        <path
                          d="M15.313 8.5H19a.75.75 0 0 1 .53 1.28L6.616 22.5 9.039 13H5a.75.75 0 0 1-.684-1.058L9.015 1.5h10.273l-3.975 7z"
                          fill="currentColor"
                        />
                      </svg>
                      Shock
                    </span>
                  </span>
                </div>
                {/* <button
                  onClick={handleToggleClick}
                  className={cn(
                    "lg:text-lg lg:leading-none rounded-full font-medium p-[20px] transition-all bg-primary text-primary-foreground w-1/2",
                    selectedPckg === "Shock" && "translate-x-full"
                  )}
                >
                  {selectedPckg}
                </button>
                <span className="lg:text-lg font-medium flex items-center justify-center w-1/2">
                  {selectedPckg === "Standard" ? "Shock" : "Standard"}
                </span> */}
              </div>
              {/* Price */}
              <div className="mt-6 lg:mt-[34px] relative flex items-end gap-1">
                <span className="text-[70px] lg:text-[80px] leading-none font-portlin uppercase tracking-[0.5px]">
                  {selectedPckg.pricePerMonth}
                </span>
                <div className="relative bottom-1 flex items-end gap-1 h-max">
                  <span className="text-[23px] leading-[1.4] font-portlin uppercase tracking-[0.5px]">
                    /
                  </span>
                  <span className="text-[34px] leading-none font-portlin uppercase tracking-[0.5px]">
                    m
                  </span>
                </div>
              </div>

              <p className="mt-[20px] leading-snug text-[13px] lg:text-[15px]">
                <strong>{selectedPckg.packageItems[0]}</strong>
                <br />
                Pause or cancel anytime for any reason.
              </p>

              <hr className="h-[1px] mt-[30px] lg:mt-[40px] bg-[#cec829] border-none" />

              <ul className="flex flex-col gap-4 lg:gap-[6px] mt-[30px] lg:mt-[40px]">
                {selectedPckg.packageItems?.map(
                  (pckgItem: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-center font-medium text-sm leading-tight lg:text-lg"
                    >
                      <HiCheckCircle className="size-[18px] lg:size-[20px] mr-[10px] lg:mr-[20px] shrink-0" />
                      <p>{pckgItem}</p>
                    </li>
                  )
                )}
              </ul>

              <CalComModal.Trigger className="mt-[48px]">
                <Button className="w-full">GET STARTED</Button>
              </CalComModal.Trigger>
              <div className="flex items-center justify-center mt-[24px] gap-1 text-center text-sm lg:text-lg">
                Have questions?
                <CalComModal.Trigger className="underline font-bold">
                  Book a call
                </CalComModal.Trigger>
              </div>
              {/* <div className="p-4 pb-0 lg:p-[26px] lg:pb-0">
                <h3 className="text-[50px] lg:text-[80px]  font-portlin uppercase tracking-[0.5px] uppercase leading-[.9] lg:leading-[70px]">
                  {selectedPckg.name}
                </h3>
                <ul className="flex flex-col gap-[6px] mt-[30px] lg:mt-[40px]">
                  {selectedPckg.packageItems?.map(
                    (pckgItem: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-center font-medium text-sm leading-tight lg:text-lg"
                      >
                        <HiCheckCircle className="size-[14px] lg:size-[20px] mr-[10px] lg:mr-[20px] shrink-0" />
                        <p>{pckgItem}</p>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="rounded-[10px] mt-[30px] lg:mt-[46px] p-4 lg:p-[30px] bg-primary flex flex-col items-center">
                <p className="text-[50px] lg:text-[80px] font-portlin uppercase tracking-[0.5px] text-white leading-none">
                  $9728
                </p>
                <CalComModal.Trigger className="w-full">
                  <Button
                    className="bg-white mt-[20px] lg:mt-[36px] w-full hover:bg-secondary"
                    variant="outline"
                  >
                    ORDER NOW
                  </Button>
                </CalComModal.Trigger>
                <p className="text-xs lg:text-[15px] text-[#a7a7bc] leading-normal lg:leading-[22px] text-center mt-2 lg:mt-[22px]">
                  This is a one time payment for our complete brand package.
                </p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center relative mt-[50px] lg:mt-[135px]">
          <div className="relative w-[100px] h-[25px] lg:w-[200px] lg:h-[50px] mx-auto">
            <Image
              src="/assets/images/custom-tailored@3x.webp"
              alt="Custom tailored"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-[50px] lg:text-[100px] text-center font-portlin uppercase tracking-[0.5px] leading-[.9] text-balance mt-[10px] lg:mt-[4px]">
            BRAND SOLUTION
          </h1>
        </div>
        <p className="text-sm leading-normal lg:text-lg mt-[24px] lg:mt-[30px] text-[#53545c] max-w-[480px] text-center mx-auto">
          Interested in a tailored package designed specifically to your
          business?{" "}
          <strong className="text-primary">
            Schedule a call with us today
          </strong>
        </p>
        <div className="flex justify-center mt-[48px]">
          <CalComModal.Trigger className="w-full lg:w-auto">
            <Button
              variant="outline"
              className="mx-auto lg:px-[58px] w-full lg:w-auto"
            >
              BOOK A CALL
            </Button>
          </CalComModal.Trigger>
        </div>
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

export default SectionFive;
// "use client";

// import Image from "next/image";
// import CalComModal from "@/app/(shared)/components/CalComModal";
// import { HiCheckCircle } from "react-icons/hi2";
// import { Button } from "@/app/(shared)/components/ui/button";
// import { useState } from "react";
// import { cn } from "@/app/(shared)/lib/utils";

// function SectionFive({ packages }: { packages: any[] }) {
//   const [selectedPckg, setSelectedPckg] = useState(packages[0]);

//   const handlePckgClick = (pckgName: string) => {
//     setSelectedPckg(
//       packages.find((pckg) => pckg.name === pckgName) || packages[0]
//     );
//   };
//   return (
//     <section id="package" className="relative py-[70px] lg:py-[140px]">
//       <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
//         <Image
//           src="/assets/images/shape-7-copy-7.svg"
//           fill
//           alt="Transition"
//           className="object-cover"
//         />
//       </div>
//       <div className="container px-3 mx-auto">
//         <h1 className="text-[50px] lg:text-[100px] font-portlin uppercase tracking-[0.5px] leading-[0.9] text-balance max-w-[620px]">
//           IGNITE YOUR BRANDS POTENTIAL!
//         </h1>
//         <p className="text-sm leading-normal lg:text-lg mt-[30px] lg:mt-[42px] text-muted-foreground max-w-[640px]">
//           Elevate your business with our all-in-one branding solution. From
//           concept to implementation, we&apos;ll bring your unique vision to life
//           across every touchpoint.
//         </p>
//         {/* Card */}
//         <div className="flex flex-col lg:flex-row rounded-[10px] bg-[#141423] p-[30px] lg:pr-[40px] lg:p-[50px] text-white mt-[30px] lg:mt-[75px] gap-[50px] justify-between">
//           <div className="lg:max-w-[64%]">
//             <h2 className="text-[45px] lg:text-[65px] font-portlin uppercase tracking-[0.5px] leading-none">
//               COMPLETE BRAND PACKAGE
//             </h2>

//             {/* Package lists */}
//             <ul className="grid grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-[30px] mt-[44px]">
//               {packages.map((pckg) => (
//                 <li key={pckg.name} className="pb-[92.5%] relative">
//                   <div
//                     onClick={() => handlePckgClick(pckg.name)}
//                     className={cn(
//                       "group cursor-pointer hover:bg-secondary hover:text-primary rounded-[10px] border border-[#414152] w-full h-full absolute p-3 lg:p-[30px] flex flex-col justify-between gap-1",
//                       selectedPckg.name === pckg.name &&
//                         "bg-secondary text-primary"
//                     )}
//                   >
//                     <span
//                       className={cn(
//                         "size-[43px] bg-white group-hover:bg-primary shrink-0 mt-3",
//                         selectedPckg.name === pckg.name && "bg-primary"
//                       )}
//                       style={{
//                         mask: `url(${pckg.iconUrl}) no-repeat center / contain`,
//                       }}
//                     />
//                     <p className="text-sm lg:text-[18.5px] font-medium leading-[1.19]">
//                       {pckg.name}
//                     </p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//             <p className="text-xs lg:text-lg text-[#a7a7bc] mt-[30px] lg:mt-[57px]">
//               <span className="text-secondary">*</span>Click any service to
//               explore its details and unlock the full potential of your brand
//               transformation.
//             </p>
//           </div>

//           {/* Package Details */}
//           <div className="relative w-full max-w-[400px] h-full">
//             <div className="lg:min-h-[884px] flex flex-col justify-between z-10 lg:-translate-y-[170px] lg:left-0 lg:absolute w-full h-min rounded-[10px] bg-secondary text-primary p-4 lg:p-[30px] max-w-[400px]">
//               <div className="p-4 pb-0 lg:p-[26px] lg:pb-0">
//                 <h3 className="text-[50px] lg:text-[80px]  font-portlin uppercase tracking-[0.5px] uppercase leading-[.9] lg:leading-[70px]">
//                   {selectedPckg.name}
//                 </h3>
//                 <ul className="flex flex-col gap-[6px] mt-[30px] lg:mt-[40px]">
//                   {selectedPckg.packageItems?.map(
//                     (pckgItem: string, i: number) => (
//                       <li
//                         key={i}
//                         className="flex items-center font-medium text-sm leading-tight lg:text-lg"
//                       >
//                         <HiCheckCircle className="size-[14px] lg:size-[20px] mr-[10px] lg:mr-[20px] shrink-0" />
//                         <p>{pckgItem}</p>
//                       </li>
//                     )
//                   )}
//                 </ul>
//               </div>

//               <div className="rounded-[10px] mt-[30px] lg:mt-[46px] p-4 lg:p-[30px] bg-primary flex flex-col items-center">
//                 <p className="text-[50px] lg:text-[80px] font-portlin uppercase tracking-[0.5px] text-white leading-none">
//                   $9728
//                 </p>
//                 <CalComModal.Trigger className="w-full">
//                   <Button
//                     className="bg-white mt-[20px] lg:mt-[36px] w-full hover:bg-secondary"
//                     variant="outline"
//                   >
//                     ORDER NOW
//                   </Button>
//                 </CalComModal.Trigger>
//                 <p className="text-xs lg:text-[15px] text-[#a7a7bc] leading-normal lg:leading-[22px] text-center mt-2 lg:mt-[22px]">
//                   This is a one time payment for our complete brand package.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-full h-full flex flex-col justify-center items-center relative mt-6 lg:mt-[135px]">
//           <div className="relative w-[100px] h-[25px] lg:w-[200px] lg:h-[50px] mx-auto">
//             <Image
//               src="/assets/images/custom-tailored@3x.webp"
//               alt="Custom tailored"
//               fill
//               className="object-contain"
//             />
//           </div>
//           <h1 className="text-[50px] lg:text-[100px] text-center font-portlin uppercase tracking-[0.5px] leading-[.9] text-balance mt-[10px] lg:mt-[22px]">
//             BRAND SOLUTION
//           </h1>
//         </div>
//         <p className="text-sm leading-normal lg:text-lg mt-4 lg:mt-[25px] text-[#53545c] max-w-[480px] text-center mx-auto">
//           Interested in a tailored package designed specifically to your
//           business?{" "}
//           <strong className="text-primary">
//             Schedule a call with us today
//           </strong>
//         </p>
//         <div className="flex justify-center mt-[30px]">
//           <CalComModal.Trigger className="w-full lg:w-auto">
//             <Button
//               variant="outline"
//               className="mx-auto lg:px-[58px] w-full lg:w-auto"
//             >
//               BOOK A CALL
//             </Button>
//           </CalComModal.Trigger>
//         </div>
//       </div>
//       {/* <div className="absolute w-full h-[27px] lg:h-[37px] -bottom-[6px]">
//         <Image
//           src="/assets/images/shape-7-copy-8.svg"
//           fill
//           alt="Transition"
//           className="object-cover"
//         />
//       </div> */}
//     </section>
//   );
// }

// export default SectionFive;
