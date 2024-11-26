"use client";

import { ComponentProps, useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Dialog, DialogContent } from "@/app/(shared)/components/ui/dialog";
import { cn } from "../lib/utils";
import useCalComStore from "../store/useCalComStore";

export default function CalComModal() {
  const { isOpen, close } = useCalComStore();
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      close();
    }
  };

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});

      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        cssVarsPerTheme: {
          light: {
            // @ts-ignore
            "cal-border-booker-width": 0,
          },
        },
        layout: "month_view",
      });
      // cal("on", {
      //   action: "bookingSuccessful",
      //   callback: () => router.push("/booking/confirmation"),
      // });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-[90%] max-h-[90%] lg:h-auto overflow-auto lg:max-w-screen-lg rounded-[8px]">
        <Cal
          calLink="jeremy-ellsworth-uwa6in/design-consultation"
          style={{
            width: "100%",
            height: "100%",
            overflow: "scroll",
          }}
          config={{ layout: "month_view" }}
        />
      </DialogContent>
    </Dialog>
  );
}

function Trigger({ children, className }: ComponentProps<"button">) {
  const { open } = useCalComStore();
  return (
    <div onClick={open} className={cn("cursor-pointer", className)}>
      {children}
    </div>
  );
}

CalComModal.Trigger = Trigger;
