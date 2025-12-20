"use client";

import { use } from "react";

import { PopoverContext } from "./popoverContext";
import { AccessNavigation, AccessNavigationPropsT } from "../accessNavigation/accessNavigation";

export type PopoverBodyPropsT = AccessNavigationPropsT & {
  preventClose?: boolean;
};

export function PopoverBody({ preventClose, onClick, ...p }: PopoverBodyPropsT) {
  const { bodyRef, isOpen } = use(PopoverContext);

  return isOpen ? (
    <AccessNavigation
      ref={bodyRef}
      data-state={isOpen}
      onClick={(ev) => {
        if (preventClose) {
          ev.stopPropagation();
        }

        onClick?.(ev);
      }}
      {...p}
    />
  ) : null;
}
