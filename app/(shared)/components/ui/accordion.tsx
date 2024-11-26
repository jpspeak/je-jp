"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Minus, Plus } from "lucide-react";

import { cn } from "@/app/(shared)/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 border-b text-left items-center justify-between p-4 lg:p-[32px] text-base lg:text-lg leading-none font-semibold transition-all hover:underline [&[data-state=closed]>.minus]:hidden [&[data-state=open]>.minus]:block [&[data-state=closed]>.plus]:block [&[data-state=open]>.plus]:hidden",
        className
      )}
      {...props}
    >
      {children}
      {/* <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />  */}
      <Plus className="size-[23px] lg:size-[25px] shrink-0 transition-transform duration-200 plus" />
      <Minus className="size-[23px] lg:size-[25px] shrink-0 transition-transform duration-200 minus" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="data-[state=closed]:overflow-hidden lg:pb-[32px] leading-[1.65] text-sm lg:text-[17px] transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
