import { PopoverBody } from "./popoverBody";
import { PopoverRoot } from "./popoverRoot";
import { PopoverToggle } from "./popoverToggle";

export const Popover = Object.assign(PopoverRoot, {
  Toggle: PopoverToggle,
  Body: PopoverBody,
}); 