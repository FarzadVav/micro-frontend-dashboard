"use client";

import { createContext, RefObject } from "react";

type UploadContextT = {
  inputRef: RefObject<HTMLInputElement | null>
}

export const UploadContext = createContext<UploadContextT>({} as UploadContextT)