import { cn } from "@repo/lib";
import { forwardRef } from "react";

type InputWrapperProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  variant?: "outline" | "soft",
  color?: "foreground" | "background" | "primary" | "secondary" | "error" | "warning" | "success" | "info",
  size?: "sm" | "lg",
  isRounded?: boolean,
  isSquare?: boolean,
  icon?: React.ReactNode,
  children?: React.ReactNode,
};

export const InputWrapper = forwardRef<HTMLLabelElement, InputWrapperProps>(
  ({
    variant,
    color,
    size,
    isRounded,
    isSquare,
    icon,
    className,
    children,
    ...props
  }, ref) => {
    const variantClasses = {
      outline: "input-outline",
      soft: "input-soft",
    };
    const colorClasses = {
      foreground: "palette-foreground",
      background: "palette-background",
      primary: "palette-primary",
      secondary: "palette-secondary",
      error: "palette-error",
      warning: "palette-warning",
      success: "palette-success",
      info: "palette-info",
    };
    const sizeClasses = {
      sm: "input-sm",
      lg: "input-lg",
    };
    const roundedClass = isRounded ? "input-rounded" : "";
    const squareClass = isSquare ? "input-square" : "";

    return (
      <label
        ref={ref}
        className={cn(
          "input",
          variant && variantClasses[variant],
          color && colorClasses[color],
          size && sizeClasses[size],
          roundedClass,
          squareClass,
          className
        )}
        {...props}
      >
        {icon && icon}
        {children}
      </label>
    );
  }
);

InputWrapper.displayName = "InputWrapper";

