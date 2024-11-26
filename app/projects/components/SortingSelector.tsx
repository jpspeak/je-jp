import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(shared)/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

function SortingSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleOrderChange = (sortBy: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", sortBy);

    router.replace(`/projects?${params.toString()}`, { scroll: false });
  };
  return (
    <Select
      onValueChange={handleOrderChange}
      defaultValue={searchParams.get("sortBy") || ""}
    >
      <SelectTrigger
        aria-label="Open sort options"
        className="w-full lg:w-[282px] text-[#53545c]"
      >
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          className="p-3 text-sm lg:text-lg w-[calc(100vw-40px)] lg:w-auto"
          value="Most Recent"
        >
          Most Recent
        </SelectItem>
        <SelectItem
          className="p-3 text-sm lg:text-lg w-[calc(100vw-40px)] lg:w-auto"
          value="Oldest First"
        >
          Oldest First
        </SelectItem>
        {/* <SelectItem value="Alphabetical (A-Z)">Alphabetical (A-Z)</SelectItem>
        <SelectItem value="Alphabetical (Z-A)">Alphabetical (Z-A)</SelectItem> */}
      </SelectContent>
    </Select>
  );
}

export default SortingSelector;
