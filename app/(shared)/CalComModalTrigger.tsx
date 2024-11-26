"use client";

import React, { ComponentProps } from "react";
import CalComModal from "./components/CalComModal";
import { Button, ButtonProps } from "./components/ui/button";
import { cn } from "./lib/utils";

function CalComModalTrigger(props: ComponentProps<"button"> & ButtonProps) {
  return (
    <CalComModal.Trigger>
      <Button {...props} className={cn("w-full lg:w-max", props.className)}>
        {props.children}
      </Button>
    </CalComModal.Trigger>
  );
}

export default CalComModalTrigger;
