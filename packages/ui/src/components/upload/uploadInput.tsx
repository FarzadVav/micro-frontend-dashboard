"use client";

import { ComponentProps, use } from "react"
import { UploadContext } from "./uploadContext"

function UploadInput(p: Omit<ComponentProps<"input">, "ref" | "type" | "hidden">) {
  const { inputRef } = use(UploadContext);

  return (
    <input type="file" ref={inputRef} hidden {...p} />
  )
}

export default UploadInput