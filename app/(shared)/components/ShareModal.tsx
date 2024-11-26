"use client";

import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import Image from "next/image";
import {
  FaEnvelope,
  FaFacebookF,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import {
  EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";
import { toast } from "sonner";

function ShareModal({ pathname }: { pathname: string }) {
  const url = `${window.location.origin}/${pathname}`;
  const copy = () => {
    navigator.clipboard.writeText(url);
    toast("Link copied!");
  };
  return (
    <Dialog modal>
      <DialogTrigger asChild>
        <button className="flex bg-white items-center justify-center size-[70px] border-[1px] rounded-full border-[#e2e2e2]">
          <Image
            src="/assets/images/share-05-solid-sharp.svg"
            height="22"
            width="22"
            alt="share-05-solid-sharp"
          />
        </button>
      </DialogTrigger>
      <DialogContent
        className="px-4 lg:px-[87px] py-[37px] max-w-[788px] w-full flex flex-col items-center lg:!left-[49.3%]"
        overlayClass="bg-transparent"
        hideCloseButton
      >
        <p className="text-4xl lg:text-[40px] font-portlin uppercase tracking-[0.5px]">
          SHARE THIS PROJECT
        </p>
        <div className="flex mt-[24px] gap-[10px]">
          <FacebookShareButton url={url}>
            <div className="relative size-[40px] bg-primary text-white flex items-center justify-center rounded-full">
              <FaFacebookF />
            </div>
          </FacebookShareButton>
          <PinterestShareButton url={url} media="">
            <div className="size-[40px] bg-primary text-white flex items-center justify-center rounded-full">
              <FaPinterestP />
            </div>
          </PinterestShareButton>
          <TwitterShareButton url={url}>
            <div className="size-[40px] bg-primary text-white flex items-center justify-center rounded-full">
              <FaXTwitter />
            </div>
          </TwitterShareButton>
          <EmailShareButton url={url}>
            <div className="size-[40px] bg-primary text-white flex items-center justify-center rounded-full">
              <FaEnvelope />
            </div>
          </EmailShareButton>
        </div>
        <div
          onClick={copy}
          className="h-[60px] mt-[22px] line-clamp-1 flex items-center justify-center border border-input rounded-[5px] px-6 py-[22px] lg:px-[80px] text-lg w-full"
        >
          <p className="line-clamp-1">{url}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ShareModal;
