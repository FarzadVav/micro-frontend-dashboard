import { ModalRoot } from "./modalRoot";
import { ModalBody } from "./modalBody";
import { ModalHeader } from "./modalHeader";
import { ModalPortal } from "./modalPortal";
import { ModalToggle } from "./modalTrigger";
import { ModalContent } from "./modalContent";
import { ModalFooter } from "./modalFooter";

export const Modal = Object.assign(ModalRoot, {
  Toggle: ModalToggle,
  Portal: ModalPortal,
  Body: ModalBody,
  Header: ModalHeader,
  Footer: ModalFooter,
  Content: ModalContent,
});
