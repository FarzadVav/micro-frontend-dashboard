"use client";

import type { HTMLAttributes } from "react";

export type ModalFooterPropsT = HTMLAttributes<HTMLDivElement>;

export function ModalFooter({ onClick, ...p }: ModalFooterPropsT) {
  return (
    <div
      onClick={(ev) => {
        onClick?.(ev);
        ev.stopPropagation();
      }}
      {...p}
    />
  );
}
