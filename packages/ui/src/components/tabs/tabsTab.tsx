"use client";

import { use } from "react";

import { TabsContext } from "./tabsContext";
import { Button, ButtonPropsT } from "../button/button";

export type TabsTabPropsT = ButtonPropsT & {
  value: string;
};

export function TabsTab({ value, onClick, ...p }: TabsTabPropsT) {
  const { activeTab, setActiveTab } = use(TabsContext);

  return (
    <Button
      data-state={value === activeTab}
      onClick={(ev) => {
        onClick?.(ev);
        setActiveTab(value);
      }}
      {...p}
    />
  );
}
