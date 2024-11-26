"use client";

import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const langs = {
  ja: {
    flag: "/assets/images/jp.webp",
    name: "日本語 (Japanese)",
  },
  en: {
    flag: "/assets/images/us.webp",
    name: "English (United States)",
  },
} as const;

type LangKey = keyof typeof langs;

export default function LanguageSelector() {
  const router = useRouter();
  const params = useParams();
  //   const lang = (params.lang || "ja") as LangKey;
  const lang = Object.keys(langs).includes(params.lang as LangKey)
    ? (params.lang as LangKey)
    : "ja";

  const handleNavItemClick = (lang: string) => {
    if (lang === "ja") {
      router.push(`/`);
    } else {
      router.push(`/${lang}`);
    }
    router.refresh();
  };
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="flex items-center gap-2 ml-[38px] outline-none">
        <Image
          src={langs[lang].flag}
          alt={langs[lang].name}
          width={24}
          height={16}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8px"
          height="5px"
          viewBox="0 0 16 9"
        >
          <path
            fillRule="evenodd"
            d="m15.1-.001-6.534 8.8a.875.875 0 0 1-1.132 0L0-.001"
          />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {Object.entries(langs).map(([key, value]) => (
          <DropdownMenuItem
            onClick={() => handleNavItemClick(key)}
            className={`${lang === key ? "bg-muted" : ""}`}
            key={key}
          >
            <Image
              src={value.flag}
              alt={value.name}
              width={24}
              height={16}
              className="object-contain"
            />
            {value.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
