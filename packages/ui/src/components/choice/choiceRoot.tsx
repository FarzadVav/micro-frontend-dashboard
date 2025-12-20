"use client";

import { ChoiceContext, ChoiceContextT } from "./choiceContext";
import { AccessNavigation, AccessNavigationPropsT } from "../accessNavigation/accessNavigation";

type ChoiceRootPropsT = AccessNavigationPropsT & ChoiceContextT;

export function ChoiceRoot({
  multiple,
  activeChoice,
  setActiveChoice,
  requiredOne,
  ...p
}: ChoiceRootPropsT) {
  return (
    <ChoiceContext
      value={{ multiple, activeChoice, setActiveChoice, requiredOne } as ChoiceContextT}>
      <AccessNavigation {...p} />
    </ChoiceContext>
  );
}
