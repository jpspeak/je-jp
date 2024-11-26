"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(shared)/components/ui/select";
import { cn } from "@/app/(shared)/lib/utils";
import { ReviewPlatform } from "@/sanity.types";
import { useRouter, useSearchParams } from "next/navigation";

function PlatformSelectorClient({
  className,
  options,
}: {
  className?: string;
  options: ReviewPlatform[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePlatformChange = (platformId: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("platformId", platformId);

    router.replace(`/reviews?${params.toString()}`, { scroll: false });
  };
  return (
    <Select onValueChange={handlePlatformChange} defaultValue="all">
      <SelectTrigger
        aria-label="Open platform options"
        className={cn("w-full lg:w-[282px] text-[#53545c]", className)}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        ref={(ref) =>
          // temporary workaround from https://github.com/shadcn-ui/ui/issues/1220
          ref?.addEventListener("touchend", (e) => e.preventDefault())
        }
        className="max-h-[300px]"
      >
        <SelectItem
          className="p-3 text-sm lg:text-lg w-[calc(100vw-40px)] lg:w-auto"
          value="all"
        >
          All Platforms
        </SelectItem>
        {options.map((reviewPlatform) => (
          <SelectItem
            className="p-3 text-sm lg:text-lg w-[calc(100vw-40px)] lg:w-auto"
            key={reviewPlatform._id}
            value={reviewPlatform._id}
          >
            {reviewPlatform.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default PlatformSelectorClient;
