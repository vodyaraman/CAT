import type { SizeFlags, ButtonSize } from "@/types/components.interfaces";

export const getButtonSize = ({ s, m, l }: SizeFlags): string => {
  const size: ButtonSize = l ? 'l' : s ? 's' : 'm';
  return `main-button--${size}`;
};
