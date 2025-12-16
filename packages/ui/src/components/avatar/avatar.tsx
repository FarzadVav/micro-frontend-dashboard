import { cn } from "@repo/lib";

function Avatar({
  size,
  isCircle,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  size?: "xxl" | "xl" | "lg" | "sm" | "xs" | "xxs" | "xxxs",
  isCircle?: boolean,
}) {
  const sizeClasses = {
    xxl: "avatar-xxl",
    xl: "avatar-xl",
    lg: "avatar-lg",
    sm: "avatar-sm",
    xs: "avatar-xs",
    xxs: "avatar-xxs",
    xxxs: "avatar-xxxs",
  };
  const circleClass = isCircle ? "avatar-circle" : "";

  return (
    <div
      className={cn(
        "avatar",
        size && sizeClasses[size],
        circleClass,
        className
      )}
      {...props}
    />
  );
}

export default Avatar;

