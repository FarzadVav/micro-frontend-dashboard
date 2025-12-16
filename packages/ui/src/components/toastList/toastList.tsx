"use client";

import { Toast } from "@base-ui-components/react";
import { BanIcon, CircleCheckIcon, InfoIcon, TriangleAlertIcon, XIcon } from "lucide-react";

import { cn } from "@repo/lib";

function ToastList() {
  const { toasts } = Toast.useToastManager();

  return toasts.map((toast) => (
    <Toast.Root
      key={toast.id}
      toast={toast}
      className={cn("toast border-2",
        toast.data.status === "info" && "bg-info-foreground text-info border-info",
        toast.data.status === "success" && "bg-success-foreground text-success border-success",
        toast.data.status === "error" && "bg-error-foreground text-error border-error",
        toast.data.status === "warning" && "bg-warning-foreground text-warning border-warning",
      )}>
      <Toast.Content className={"f-align gap-3"}>
        {toast.data.status === "info" && <InfoIcon className="size-5" />}
        {toast.data.status === "success" && <CircleCheckIcon className="size-5" />}
        {toast.data.status === "error" && <BanIcon className="size-5" />}
        {toast.data.status === "warning" && <TriangleAlertIcon className="size-5" />}

        <Toast.Description />

        <Toast.Close className={"btn btn-ghost btn-rounded btn-square mr-auto"} aria-label="بستن">
          <XIcon className="btn-icon-size" />
        </Toast.Close>
      </Toast.Content>
    </Toast.Root>
  ));
}

export default ToastList;