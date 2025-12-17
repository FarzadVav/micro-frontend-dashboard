"use client";

import { Combobox } from "@repo/ui/src/base-ui";
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react";

const TENANTS = [
  "Tenant 1",
  "Tenant 2",
  "Tenant 3",
];


function LoginForm() {
  return (
    <form action="" className="w-1/2 h-full f-center flex-col">
      <Combobox.Root items={TENANTS}>
        <div className="relative flex flex-col gap-1 text-sm leading-5 font-medium text-gray-900">
          <label htmlFor="tenant">Choose a tenant</label>
          <div className="input input-outline">
            <Combobox.Input
              id="tenant"
              className="input-field"
              placeholder="Select a tenant"
            />
            <Combobox.Clear aria-label="Clear selection">
              <XIcon className="input-icon-size" />
            </Combobox.Clear>
            <Combobox.Trigger aria-label="Open popup">
              <ChevronDownIcon className="input-icon-size" />
            </Combobox.Trigger>
          </div>
        </div>

        <Combobox.Portal>
          <Combobox.Positioner sideOffset={4}>
            <Combobox.Popup className="w- max-h-[30vh] origin-(--transform-origin) rounded-md bg-background-thin shadow-lg shadow-foreground/10 outline-1 outline-background-thick transition-all data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
              <Combobox.Empty className="text-foreground-mute">
                چیزی پیدا نشد
              </Combobox.Empty>
              <Combobox.List className="outline-0 overflow-y-auto scroll-p-3 p-3 overscroll-contain max-h-[min(23rem,var(--available-height))]">
                {(item: string) => (
                  <Combobox.Item
                    key={item}
                    value={item}
                    className="grid grid-cols-[1rem_1fr] items-center gap-3 py-1.5 px-3 data-highlighted:bg-background rounded-md"
                  >
                    <Combobox.ItemIndicator>
                      <CheckIcon className="size-4" />
                    </Combobox.ItemIndicator>
                    <span className="col-start-2">{item}</span>
                  </Combobox.Item>
                )}
              </Combobox.List>
            </Combobox.Popup>
          </Combobox.Positioner>
        </Combobox.Portal>
      </Combobox.Root>
    </form>
  )
}

export default LoginForm