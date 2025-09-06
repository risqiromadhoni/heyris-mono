import type { ButtonVariants } from "@heyris/themes/button";
import { button as buttonTheme } from "@heyris/themes/button";

export interface UseButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    ButtonVariants {
  ref: React.ForwardedRef<HTMLButtonElement>;
  label: string;
}

export function useButton(props: UseButtonProps) {
  const {
    type: btnType = "button",
    className: classNameProps,
    variant,
    size,
    ...buttonProps
  } = props;
  const className = buttonTheme({ variant, size, className: classNameProps });
  return {
    ...buttonProps,
    type: btnType,
    className,
  };
}
