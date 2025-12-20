'use client';

import { toast as sonnerToast, Toaster } from 'sonner';
import { XCircleIcon, CheckCircleIcon, InfoIcon, XIcon, AlertCircleIcon } from 'lucide-react';

import { cn } from '@repo/lib';
import { Button } from '../button/button';
import { ColorsT } from '../../types';

type ToastProps = {
  id: string | number;
  title: string;
  description?: string;
  color: ColorsT;
  status: "info" | "success" | "error" | "warning";
  button?: {
    onClick?: () => void;
  };
}

export function toast(toast: Omit<ToastProps, 'id'>) {
  return sonnerToast.custom((id) => (
    <Toast
      id={id}
      title={toast.title}
      description={toast.description}
      color={toast.color}
      status={toast.status}
      button={{
        onClick: toast.button?.onClick,
      }}
    />
  ));
}

function Toast(props: ToastProps) {
  const { title, description, color, status, button, id } = props;

  return (
    <div
      className={cn(
        "f-align gap-3 rounded-full p-3 pr-6 ring-2 ring-palette/10 shadow-lg shadow-black/5 bg-brush text-palette",
        color === "foreground" && "palette-foreground",
        color === "background" && "palette-background",
        color === "background-thin" && "palette-background-thin",
        color === "background-thick" && "palette-background-thick",
        color === "primary" && "palette-primary",
        color === "secondary" && "palette-secondary",
        color === "error" && "palette-error",
        color === "warning" && "palette-warning",
        color === "success" && "palette-success",
        color === "info" && "palette-info")}
    >
      <div className="flex items-start gap-3">
        {status === "info" && <InfoIcon className="size-5" />}
        {status === "success" && <CheckCircleIcon className="size-5" />}
        {status === "error" && <XCircleIcon className="size-5" />}
        {status === "warning" && <AlertCircleIcon className="size-5" />}

        <div className="flex-1">
          <p className="font-ravi-bold">{title}</p>
          {description && <p className="mt-1 text-sm">{description}</p>}
        </div>
      </div>
      <Button
        color={color}
        variant="ghost"
        size='sm'
        isRounded
        isSquare
        onClick={() => {
          button?.onClick?.();
          sonnerToast.dismiss(id);
        }}
      >
        <XIcon className="btn-icon-size" />
      </Button>
    </div>
  );
}

export { Toaster };