"use client";

import { use } from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";

import { Portal } from "../portal/portal";
import { ModalContext } from "./modalContext";
import { ClientOnly } from "../clientOnly/clientOnly";

export type ModalPortalPropsT = HTMLMotionProps<"div">;

export function ModalPortal({ onClick, ...p }: ModalPortalPropsT) {
  const { isOpen, setOpen } = use(ModalContext);

  return (
    <ClientOnly>
      <Portal>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(ev) => {
                onClick?.(ev);
                setOpen(false);
              }}
              {...p}
            />
          ) : null}
        </AnimatePresence>
      </Portal>
    </ClientOnly>
  );
}
