"use client";

import CalComModalTrigger from "@/app/(shared)/CalComModalTrigger";
import Link from "next/link";
import PortableText from "react-portable-text";
import { Button } from "@/app/(shared)/components/ui/button";

function ArticleBlock({ articleBlock }: { articleBlock: any }) {
  if (articleBlock._type === "body")
    return (
      <>
        {articleBlock.body && (
          <PortableText
            content={articleBlock.body}
            className="lg:px-[58px] mt-6 lg:mt-[40px] text-[15px] leading-[26px] lg:text-lg lg:leading-[30px]"
          />
        )}
      </>
    );
  if (articleBlock._type === "buttons")
    return (
      <>
        {(articleBlock.primaryButton?.text ||
          articleBlock.secondaryButton?.text) && (
          <div className="flex flex-col lg:flex-row lg:w-max lg:items-center gap-3 lg:gap-[27px] mt-6 lg:mt-[44px] lg:px-[58px]">
            {articleBlock.primaryButton?.text &&
              (articleBlock.primaryButton?.link ? (
                <Link href={articleBlock.primaryButton.link}>
                  <Button className="w-full lg:w-max">
                    {articleBlock.primaryButton.text || "CHOOSE A PACKAGE"}
                  </Button>
                </Link>
              ) : (
                <CalComModalTrigger>
                  {articleBlock.primaryButton?.text || "REQUEST A QUOTE"}
                </CalComModalTrigger>
              ))}
            {articleBlock.secondaryButton?.text &&
              (articleBlock.secondaryButton?.link ? (
                <Link href={articleBlock.secondaryButton.link}>
                  <Button variant="outline" className="w-full lg:w-max">
                    {articleBlock.secondaryButton.text || "CHOOSE A PACKAGE"}
                  </Button>
                </Link>
              ) : (
                <CalComModalTrigger variant="outline">
                  {articleBlock.secondaryButton?.text || "REQUEST A QUOTE"}
                </CalComModalTrigger>
              ))}
          </div>
        )}
      </>
    );
  return null;
}

export default ArticleBlock;
