"use client";

import { useThemeStore } from './themeStore';
import { Button, ButtonPropsT } from '../button/button'

export function ThemeButton({ ...props }: ButtonPropsT) {
  const { toggleTheme } = useThemeStore();

  return (
    <Button onClick={toggleTheme} {...props} />
  )
}
