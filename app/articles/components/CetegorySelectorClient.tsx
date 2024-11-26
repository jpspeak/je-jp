"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(shared)/components/ui/select";
import { cn } from "@/app/(shared)/lib/utils";
import { ArticleCategory } from "@/sanity.types";
import { useRouter, useSearchParams } from "next/navigation";

function CategorySelectorClient({
  className,
  options,
}: {
  className?: string;
  options: ArticleCategory[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (category: string) => {
    router.replace(`/articles?category=${category}`);
  };

  return (
    <Select
      onValueChange={handleCategoryChange}
      defaultValue={searchParams.get("category") || ""}
    >
      <SelectTrigger
        className={cn("w-full lg:w-[282px] text-[#53545c]", className)}
      >
        <SelectValue placeholder="Category" />
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
        {options.map((articleCategory) => (
          <SelectItem
            key={articleCategory._id}
            value={articleCategory.slug?.current || ""}
            className="p-3 text-sm lg:text-lg w-[calc(100vw-40px)] lg:w-auto"
          >
            {articleCategory.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default CategorySelectorClient;
