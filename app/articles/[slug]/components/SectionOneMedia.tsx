"use client";

import Image from "next/image";
import ReactPlayer from "react-player";
import { Article } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/image";

function SectionOneMedia({ article }: { article: Article }) {
  return (
    <div className="w-[100vw] -left-4 lg:left-0 lg:w-full h-0 pb-[75.8%] relative lg:rounded-[10px] bg-black overflow-hidden">
      {article.mainVideoLink ? (
        <div className="w-full pb-[56.4%] absolute top-1/2 -translate-y-1/2">
          <ReactPlayer
            width="100%"
            height="100%"
            style={{ position: "absolute", objectFit: "contain" }}
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          />
        </div>
      ) : (
        <Image
          src={urlForImage(article.mainImage as any)}
          alt={article.title || ""}
          fill
          className="object-cover"
        />
      )}
    </div>
  );
}
export default SectionOneMedia;
