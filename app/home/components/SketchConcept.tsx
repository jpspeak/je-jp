"use client";

import React, {
  MouseEvent,
  TouchEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";

function SketchConcept({ before, after }: { before: string; after: string }) {
  const sketchContainerRef = useRef<HTMLDivElement>(null);
  const overlaySketchRef = useRef<HTMLDivElement>(null);
  const separatorRef = useRef<HTMLDivElement>(null);
  const [sketchContainerLeftDistance, setSketchContainerLeftDistance] =
    useState(0);

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    const mouseDistanceFromLeft = event.clientX;
    const distanceFromLeft =
      mouseDistanceFromLeft - sketchContainerLeftDistance;

    separatorRef.current!.style.left = `${distanceFromLeft - 4}px`;
    separatorRef.current!.style.transform = "translate(0,-50%)";
    overlaySketchRef.current!.style.clipPath = `inset(0 0 0 ${distanceFromLeft}px)`;
  };
  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    const touchDistanceFromLeft = event.touches[0].clientX;
    const distanceFromLeft =
      touchDistanceFromLeft - sketchContainerLeftDistance;

    separatorRef.current!.style.left = `${distanceFromLeft - 4}px`;
    separatorRef.current!.style.transform = "translate(0,-50%)";
    overlaySketchRef.current!.style.clipPath = `inset(0 0 0 ${distanceFromLeft}px)`;
  };

  useEffect(() => {
    overlaySketchRef.current!.style.clipPath = `inset(0 0 0 50%)`;

    const setInitialDistance = () => {
      // This will set the sketch container left distance from viewport
      setSketchContainerLeftDistance(
        sketchContainerRef.current!.getBoundingClientRect().left
      );
    };

    setInitialDistance();
    window.addEventListener("resize", setInitialDistance);

    return () => {
      window.removeEventListener("resize", setInitialDistance);
    };
  }, []);
  return (
    <div
      ref={sketchContainerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="w-full pb-[100%] bg-transparent rounded-[6px] lg:rounded-[10px] overflow-hidden relative"
    >
      <Image
        src={before}
        fill
        alt="Sketch concept"
        className="object-cover h-full object-center"
      />
      <div ref={overlaySketchRef} className="w-full h-full absolute">
        <Image
          src={after}
          fill
          alt="Sketch concept"
          className="object-cover h-full object-center"
        />
      </div>
      <div
        ref={separatorRef}
        className="w-[8px] h-[80%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-primary rounded-3xl absolute"
      />
    </div>
  );
}

export default SketchConcept;
