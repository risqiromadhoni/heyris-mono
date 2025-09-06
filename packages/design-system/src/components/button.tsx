import { forwardRef } from "react";
import type { UseButtonProps } from "@/hooks/use-button";
import { useButton } from "@/hooks/use-button";

interface ButtonProps extends UseButtonProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { label, ...buttonProps } = useButton({ ...props, ref });
    return <button {...buttonProps}>{label}</button>;
  }
);
