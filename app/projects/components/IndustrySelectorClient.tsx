"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(shared)/components/ui/select";
import { cn } from "@/app/(shared)/lib/utils";
import { Industry } from "@/sanity.types";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function IndustrySelectorClient({
  className,
  options,
}: {
  className?: string;
  options: Industry[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleIndustryChange = (industry: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("project_industry", industry);

    router.replace(`/${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <Select
      onValueChange={handleIndustryChange}
      defaultValue={searchParams.get("project_industry") || ""}
    >
      <SelectTrigger
        aria-label="Open industry options"
        className={cn("w-full lg:w-[282px] text-[#53545c]", className)}
      >
        <SelectValue placeholder="Industry" />
      </SelectTrigger>
      <SelectContent
        ref={(ref) =>
          // temporary workaround from https://github.com/shadcn-ui/ui/issues/1220
          ref?.addEventListener("touchend", (e) => e.preventDefault())
        }
        className="max-h-[300px]"
      >
        <SelectItem
          value="all"
          className="p-3 text-sm lg:text-lg w-[calc(100vw-40px)] lg:w-auto"
        >
          All
        </SelectItem>
        {options.map((projectIndustry) => (
          <SelectItem
            key={projectIndustry._id}
            value={projectIndustry.slug?.current || ""}
            className="p-3 text-sm lg:text-lg w-[calc(100vw-40px)] lg:w-auto"
          >
            {projectIndustry.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default IndustrySelectorClient;
