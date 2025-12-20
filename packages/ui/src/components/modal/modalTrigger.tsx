"use client";

import { use } from "react";

import { ModalContext } from "./modalContext";
import { ButtonPropsT, Button } from "../button/button";

export type ModalTogglePropsT = ButtonPropsT;

export function ModalToggle({ onClick, ...props }: ModalTogglePropsT) {
  const { setOpen } = use(ModalContext);

  return (
    <Button
      onClick={(ev) => {
        onClick?.(ev);
        setOpen((prev) => !prev);
      }}
      {...props}
    />
  );
}
