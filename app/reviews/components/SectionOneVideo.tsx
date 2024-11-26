"use client";

import React from "react";
import ReactPlayer from "react-player";

function SectionOneVideo() {
  return (
    <div className="w-full h-0 pb-[75.8%] relative rounded-[6px] lg:rounded-[10px] bg-black">
      <div className="w-full pb-[56.4%] absolute top-1/2 -translate-y-1/2">
        <ReactPlayer
          width="100%"
          height="100%"
          style={{ position: "absolute", objectFit: "contain" }}
          url="https://www.youtube.com/watch?v=BpuC_iyq0l8&ab_channel=JeremyEllsworthDesignsLLC"
          controls
          light="/assets/images/commercial-thumbnail.jpg"
          playing
        />
      </div>
    </div>
  );
}

export default SectionOneVideo;
