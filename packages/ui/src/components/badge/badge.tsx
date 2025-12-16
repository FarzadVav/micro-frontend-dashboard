import { cn } from "@repo/lib";

function Badge({
  variant,
  color,
  size,
  isSquare,
  isRounded,
  isFull,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "fill" | "outline" | "soft",
  color?: "foreground" | "background" | "primary" | "secondary" | "error" | "warning" | "success" | "info",
  size?: "sm" | "lg",
  isSquare?: boolean,
  isRounded?: boolean,
  isFull?: boolean,
}) {
  const variantClasses = {
    fill: "badge-fill",
    outline: "badge-outline",
    soft: "badge-soft",
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
    sm: "badge-sm",
    lg: "badge-lg",
  };
  const squareClass = isSquare ? "badge-square" : "";
  const roundedClass = isRounded ? "badge-rounded" : "";
  const fullClass = isFull ? "badge-full" : "";

  return (
    <span
      className={cn(
        "badge",
        variant && variantClasses[variant],
        color && colorClasses[color],
        size && sizeClasses[size],
        squareClass,
        roundedClass,
        fullClass,
        className
      )}
      {...props}
    />
  );
}

export default Badge;

