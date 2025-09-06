import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const button = tv({
  base: "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default:
        "bg-linear-to-b from-zinc-700 to-zinc-800 text-shadow-xs text-white hover:to-zinc-700 dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/20 dark:from-zinc-600 dark:to-zinc-700 dark:hover:to-zinc-600",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15",
      destructive:
        "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-foreground underline-offset-4 hover:underline",
    },
    size: {
      default: "h-8 px-4",
      sm: "h-7 gap-1.5 px-3 [&_svg:not([class*='size-'])]:size-3.5",
      lg: "h-10 px-6",
      icon: "size-8",
      "icon:sm": "size-7",
      "icon:lg": "size-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ButtonVariants = VariantProps<typeof button>;
