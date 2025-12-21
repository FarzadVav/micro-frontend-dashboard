import { SVGProps } from "react";

import { ColorsT } from "../../types";
import { cn } from "@repo/lib";

type PopoverArrowPropsT = SVGProps<SVGSVGElement> & {
  fillColor?: ColorsT;
}

export function PopoverArrow({ className, fillColor, ...props }: PopoverArrowPropsT) {
  const colorClasses = {
    foreground: "fill-foreground",
    background: "fill-background",
    "background-thin": "fill-background-thin",
    "background-thick": "fill-background-thick",
    primary: "fill-primary",
    secondary: "fill-secondary",
    error: "fill-error",
    warning: "fill-warning",
    success: "fill-success",
    info: "fill-info",
  };

  return (
    <svg className={cn("absolute h-1.5", className)} viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4.76367 8.25L0.000531429 8.97232e-07L9.52681 6.44184e-08L4.76367 8.25Z" className={colorClasses[fillColor ?? "background-thin"]} />
    </svg>
  )
}
