"use client";

import { use } from "react";

import { PopoverContext } from "./popoverContext";
import { ButtonPropsT, Button } from "../button/button";

export type PopoverTogglePropsT = ButtonPropsT;

export function PopoverToggle({ onClick, ...props }: PopoverTogglePropsT) {
  const { mode, toggleRef, isOpen, setOpen } = use(PopoverContext);

  return (
    <Button
      ref={toggleRef}
      data-state={isOpen}
      onClick={(ev) => {
        onClick?.(ev);
        ev.stopPropagation();
        if (["click", "both"].includes(mode)) {
          setOpen((prev) => !prev);
        }
      }}
      {...props}
    />
  );
}
