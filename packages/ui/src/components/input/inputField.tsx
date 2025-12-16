import { cn } from "@repo/lib";
import { forwardRef } from "react";

type InputFieldProps =
  | (React.InputHTMLAttributes<HTMLInputElement> & { as?: "input" })
  | (React.TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" })
  | (React.SelectHTMLAttributes<HTMLSelectElement> & { as: "select" });

export const InputField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  InputFieldProps
>(({ className, as, ...props }, ref) => {
  if (as === "textarea") {
    return (
      <textarea
        ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
        className={cn("input-field", className)}
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }

  if (as === "select") {
    return (
      <select
        ref={ref as React.ForwardedRef<HTMLSelectElement>}
        className={cn("input-field", className)}
        {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
      />
    );
  }

  return (
    <input
      ref={ref as React.ForwardedRef<HTMLInputElement>}
      className={cn("input-field", className)}
      {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
    />
  );
});

InputField.displayName = "InputField";

