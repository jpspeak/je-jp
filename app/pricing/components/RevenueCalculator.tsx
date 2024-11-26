// "use client";

// import { useState } from "react";
// import { Button } from "@/app/(shared)/components/ui/button";
// import Input from "@/app/(shared)/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/app/(shared)/components/ui/select";
// import { calculateRevenue, cn } from "@/app/(shared)/lib/utils";
// import IndustrySelector from "@/app/projects/components/IndustrySelector";
// import { HiCheckCircle } from "react-icons/hi2";
// import { useForm, Controller } from "react-hook-form";
// import { getProjectsIndustry } from "@/sanity/query/project";
// import { useCalculationStore } from "../useCalculationStore";
// import { Loader } from "lucide-react";
// import Link from "next/link";
// import "../style.css";
// import CalComModal from "@/app/(shared)/components/CalComModal";

// type Inputs = {
//   industry: string;
//   currentAnnualRevenue: string;
//   goalAnnualRevenue: string;
//   brandingStatus: string;
// };

// function RevenueCalculator() {
//   const { calculation, isCalculating, setCalculation, setIsCalculating } =
//     useCalculationStore();
//   const [recommendation, setRecommendation] = useState<0 | 1>(0);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     control,
//     getValues,
//     watch,
//   } = useForm<Inputs>();

//   const submit = async (data: Inputs) => {
//     setIsCalculating(true);
//     try {
//       const { percentageIncrease } = await getProjectsIndustry(data.industry);
//       const revenue = calculateRevenue({
//         brandingStatus: data.brandingStatus,
//         costOfBranding: 9_728,
//         currentAnnualRevenue: Number(
//           data.currentAnnualRevenue.replace(/,/g, "")
//         ),
//         goalAnnualRevenue: Number(data.goalAnnualRevenue.replace(/,/g, "")),
//         percentageIncrease: Number(percentageIncrease),
//       });
//       setCalculation(revenue);
//       const random0or1 = Math.floor(Math.random() * 2) as 0 | 1;
//       setRecommendation(random0or1);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsCalculating(false);
//     }
//   };

//   const InfinitePackageLink = () => (
//     <span className="whitespace-nowrap">
//       Order our <br className="lg:hidden" />
//       <Link
//         href="/pricing#package"
//         className="font-bold border-b-2 border-primary inline-block leading-none"
//       >
//         Infinite Brand Package
//       </Link>
//       👇
//     </span>
//   );

//   const formatNumberWithCommas = (value: string) => {
//     // Remove all non-digit characters
//     let formattedValue = value.replace(/\D/g, "");

//     // Add commas to the number
//     formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

//     return formattedValue;
//   };

//   const renderRecommendation = (random0or1: 0 | 1) => {
//     const recommendation = {
//       0: <InfinitePackageLink />,
//       1: (
//         <CalComModal.Trigger className="font-bold border-b border-primary inline-block leading-none">
//           Schedule a call
//         </CalComModal.Trigger>
//       ),
//     };

//     return recommendation[random0or1];
//   };

//   return (
//     <>
//       <form
//         onSubmit={handleSubmit(submit)}
//         className={cn(
//           "bg-white flex flex-col lg:flex-row p-4 lg:p-[30px] gap-4 lg:gap-[30px] rounded lg:rounded-[10px]",
//           !calculation && "lg:w-full"
//         )}
//       >
//         {calculation && (
//           <div className="rounded-[8px] bg-[#f9f8f3] px-4 py-5 lg:p-[74px] grow">
//             <h1 className="font-portlin uppercase tracking-[0.5px] text-xl lg:text-[40px] leading-none">
//               ESTIMATED NEW ANNUAL REVENUE
//             </h1>
//             <span className="font-portlin uppercase tracking-[0.5px] text-6xl lg:text-[120px] leading-[.5] mt-[30px] lg:mt-[42px] inline-block ">
//               ${calculation.newAnnualRevenue.toLocaleString()}
//             </span>
//             <ul className="text-xs lg:text-lg mt-[30px] lg:mt-[40px] flex flex-col gap-2">
//               <li className="flex items-start lg:items-center">
//                 <HiCheckCircle className="size-[14px] lg:size-[20px] mr-[10px] lg:mr-[15px] shrink-0 text-[#4fba00]" />
//                 <span className="font-bold">Percent Increase:&nbsp;</span>
//                 <span className="text-[#4fba00]">▲</span>
//                 <span>{calculation.percentageIncrease}% conservatively</span>
//               </li>
//               <li className="flex items-start lg:items-center">
//                 <HiCheckCircle className="size-[14px] lg:size-[20px] mr-[10px] lg:mr-[15px] shrink-0 text-[#4fba00]" />
//                 <span className="font-bold">Added Revenue:&nbsp;</span>
//                 <span className="text-[#4fba00]">▲</span>
//                 <span>
//                   ${calculation.addedRevenue.toLocaleString()} annually
//                 </span>
//               </li>
//               <li className="flex items-start lg:items-center">
//                 <HiCheckCircle className="size-[14px] lg:size-[20px] mr-[10px] lg:mr-[15px] shrink-0 text-[#4fba00]" />
//                 <span className="font-bold mr-[2px]">
//                   Recommendation:&nbsp;
//                 </span>
//                 {renderRecommendation(recommendation)}
//               </li>
//               <li className="flex items-start lg:items-center">
//                 <HiCheckCircle className="size-[14px] lg:size-[20px] mr-[10px] lg:mr-[15px] shrink-0 text-[#4fba00]" />
//                 <span className="font-bold">ROI:&nbsp;</span>
//                 <span>{calculation.roi}% Return On Your Investment 😮</span>
//               </li>
//             </ul>
//           </div>
//         )}
//         <div className="w-full lg:max-w-[415px] rounded lg:rounded-[10px] flex flex-col gap-4 lg:gap-[20px]">
//           <div>
//             {/* <Controller
//               name="industry"
//               control={control}
//               rules={{ required: "This field is required." }}
//               render={({ field: { onChange } }) => (
//                 <IndustrySelector onChange={onChange} className="lg:w-full" />
//               )}
//             /> */}
//             {errors.industry && (
//               <p className="text-destructive mt-1 ml-1 font-medium text-sm">
//                 {errors.industry.message}
//               </p>
//             )}
//           </div>

//           <div>
//             <Controller
//               name="currentAnnualRevenue"
//               control={control}
//               defaultValue=""
//               rules={{ required: "This field is required." }}
//               render={({ field }) => (
//                 <Input
//                   required={false}
//                   id="currentAnnualRevenue"
//                   type="text"
//                   placeholder="Current Annual Revenue"
//                   {...field}
//                   onChange={(e) =>
//                     field.onChange(formatNumberWithCommas(e.target.value))
//                   }
//                   leftSlot={
//                     watch("currentAnnualRevenue") ? (
//                       <Input.LeftSlot>$</Input.LeftSlot>
//                     ) : null
//                   }
//                 />
//               )}
//             />
//             {errors.currentAnnualRevenue && (
//               <p className="text-destructive mt-1 ml-1 font-medium text-sm">
//                 {errors.currentAnnualRevenue.message}
//               </p>
//             )}
//           </div>
//           <div>
//             <Controller
//               name="goalAnnualRevenue"
//               control={control}
//               defaultValue=""
//               rules={{
//                 validate: (value) => {
//                   if (!value) return "This field is required.";
//                   if (
//                     Number(value.replace(/,/g, "")) <
//                     Number(getValues().currentAnnualRevenue.replace(/,/g, ""))
//                   )
//                     return "Must be greater than current annual income.";
//                   return true;
//                 },
//               }}
//               render={({ field }) => (
//                 <Input
//                   required={false}
//                   id="goalAnnualRevenue"
//                   type="text"
//                   placeholder="Annual Revenue Goal"
//                   {...field}
//                   onChange={(e) =>
//                     field.onChange(formatNumberWithCommas(e.target.value))
//                   }
//                   leftSlot={
//                     watch("goalAnnualRevenue") ? (
//                       <Input.LeftSlot>$</Input.LeftSlot>
//                     ) : null
//                   }
//                 />
//               )}
//             />
//             {errors.goalAnnualRevenue && (
//               <p className="text-destructive mt-1 ml-1 font-medium text-sm">
//                 {errors.goalAnnualRevenue.message}
//               </p>
//             )}
//             <p className="text-[10px] lg:text-xs text-[#53545c] mt-1 lg:mt-3">
//               *Enter your target annual revenue goal for your business
//             </p>
//           </div>
//           <div>
//             <Controller
//               name="brandingStatus"
//               control={control}
//               rules={{ required: "This field is required." }}
//               render={({ field: { onChange } }) => (
//                 <Select onValueChange={onChange}>
//                   <SelectTrigger className="w-full">
//                     <SelectValue placeholder="Choose Branding Status" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="I have branding already">
//                       I have branding already
//                     </SelectItem>
//                     <SelectItem value="I don't have branding">
//                       I don&apos;t have branding
//                     </SelectItem>
//                   </SelectContent>
//                 </Select>
//               )}
//             />
//             {errors.brandingStatus && (
//               <p className="text-destructive mt-1 ml-1 font-medium text-sm">
//                 {errors.brandingStatus.message}
//               </p>
//             )}
//           </div>

//           <Button
//             type="submit"
//             variant={calculation ? "secondary" : "default"}
//             disabled={isCalculating}
//           >
//             {isCalculating ? (
//               <div className="flex items-center gap-2">
//                 <>CALCULATING </>
//                 <Loader className="animate-spin size-[20px]" />
//               </div>
//             ) : (
//               <>{calculation ? "RE-CALCULATE" : "CALCULATE NOW"}</>
//             )}
//           </Button>
//         </div>
//       </form>
//       {calculation && (
//         <p className="px-4 lg:px-0 text-muted-foreground text-xs mt-[24px]">
//           None of the numbers shown above are guaranteed, we can only provide
//           you the creatives needed to grow your business, it&apos;s up to you on
//           how you implement the creatives we do in to your business.
//         </p>
//       )}
//     </>
//   );
// }

// export default RevenueCalculator;
