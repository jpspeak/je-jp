import ShareModal from "@/app/(shared)/components/ShareModal";
import React from "react";

function ShareModalContainer({ pathname }: { pathname: string }) {
  return (
    <div className="hidden lg:flex sticky pt-[40px] top-[100px] self-start z-[1] flex-col items-center">
      {/* <ShareModal pathname={`articles/${article.slug?.current}`} /> */}
      <ShareModal pathname={pathname} />
      <p className="mt-[10px] text-sm font-bold">Share</p>
    </div>
  );
}

export default ShareModalContainer;
