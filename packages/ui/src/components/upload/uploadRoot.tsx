"use client";

import { cn } from "@repo/lib";
import { ComponentProps, useRef } from "react"
import { UploadContext } from "./uploadContext";

function UploadRoot({ className, onClick, ...p }: ComponentProps<"div">) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <UploadContext value={{ inputRef }}>
      <div
        className={cn("cursor-pointer", className)}
        onClick={ev => {
          onClick?.(ev);
          inputRef.current?.click();
        }}
        {...p}
      />
    </UploadContext>
  )
}

export default UploadRoot