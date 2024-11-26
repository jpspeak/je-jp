import { useEffect, useState } from "react";
import {
  generateAvatarInitials,
  generateRandomJapaneseName,
  getRandomDateWithin24Hours,
} from "@/app/(shared)/lib/utils";

import TimeAgo from "javascript-time-ago";
import ja from "javascript-time-ago/locale/ja";
import { useRouter } from "next/navigation";
import CalComModal from "../CalComModal";

TimeAgo.addDefaultLocale(ja);

function FakePurchasePopUp() {
  const [fakeName, setFakeName] = useState("");
  const [timeAgo, setTimeAgo] = useState("");

  const router = useRouter();
  const randomNum = Math.floor(Math.random() * 2) + 1;

  const renderLink = (randomNum: number) => {
    switch (randomNum) {
      case 1:
        return (
          <p className="text-xs leading-none">
            <span className="text-[#07c654] font-bold">LINE</span>
            でメッセージを送りました
          </p>
        );
      case 2:
        // return <p className="text-xs leading-none">Requested a quote</p>;
        return (
          <p className="text-xs leading-none">
            <span className="text-[#07c654] font-bold">LINE</span>
            でメッセージを送りました
          </p>
        );

      default:
        //   return <p className="text-xs leading-none">Requested a quote</p>;
        return (
          <p className="text-xs leading-none">
            <span className="text-[#07c654] font-bold">LINE</span>
            でメッセージを送りました
          </p>
        );
    }
  };

  const handleClick = (randomNum: number) => {
    // if (randomNum === 2) {
    //   router.push("/pricing");
    // }
  };

  useEffect(() => {
    const timeAgo = new TimeAgo("ja");

    const randomName = generateRandomJapaneseName;
    setFakeName(randomName);

    const randomDate = getRandomDateWithin24Hours();
    setTimeAgo(timeAgo.format(randomDate));
  }, []);

  return (
    <div
      onClick={() => handleClick(randomNum)}
      className="cursor-pointer text-primary lg:min-w-[262px] w-[90%] lg:w-max shadow-sm border-[1px] border-input rounded-[8px] p-[20px] flex gap-[14px] bg-white "
    >
      <div className="rounded-full bg-[#07c654] flex items-center justify-center size-[50px] font-bold">
        {generateAvatarInitials(fakeName)}
      </div>
      <div className="flex flex-col gap-[6px] items-start">
        <p className="text-[15px] font-bold leading-none">{fakeName}</p>
        {renderLink(randomNum)}
        <p className="text-[10px] leading-none text-[#a6a6a6]">{timeAgo}</p>
      </div>
    </div>
  );
}

export default FakePurchasePopUp;
