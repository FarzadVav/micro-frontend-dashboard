import { cn } from "@repo/lib";
import { Button as BaseButton, ButtonProps as BaseButtonProps } from "@base-ui-components/react";

function Button({
  variant,
  color,
  size,
  isSquare,
  isRounded,
  isFull,
  noEvent,
  className,
  ...props
}: BaseButtonProps & {
  variant?: "fill" | "outline" | "soft" | "ghost" | "float",
  color?: "foreground" | "background" | "background-thin" | "background-thick" | "primary" | "secondary" | "error" | "warning" | "success" | "info",
  size?: "sm" | "lg",
  isSquare?: boolean,
  isRounded?: boolean,
  isFull?: boolean,
  noEvent?: boolean
}) {
  const variantClasses = {
    fill: "btn-fill",
    outline: "btn-outline",
    soft: "btn-soft",
    ghost: "btn-ghost",
    float: "btn-float",
  };
  const colorClasses = {
    foreground: "palette-foreground",
    background: "palette-background",
    "background-thin": "palette-background-thin",
    "background-thick": "palette-background-thick",
    primary: "palette-primary",
    secondary: "palette-secondary",
    error: "palette-error",
    warning: "palette-warning",
    success: "palette-success",
    info: "palette-info",
  };
  const sizeClasses = {
    sm: "btn-sm",
    lg: "btn-lg",
  };
  const squareClass = isSquare ? "btn-square" : "";
  const roundedClass = isRounded ? "btn-rounded" : "";
  const fullClass = isFull ? "btn-full" : "";
  const noEventClass = noEvent ? "pointer-events-none" : "";

  return (
    <BaseButton
      className={cn(
        "btn",
        variant && variantClasses[variant],
        color && colorClasses[color],
        size && sizeClasses[size],
        squareClass,
        roundedClass,
        fullClass,
        noEventClass,
        className
      )}
      {...props}
    />
  );
}

export default Button;