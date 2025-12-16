"use client";

import { ComponentProps } from 'react'

import Button from '../button/button'
import { useThemeStore } from './themeStore';

export function ThemeButton({ ...props }: ComponentProps<typeof Button>) {
  const { toggleTheme } = useThemeStore();

  return (
    <Button onClick={toggleTheme} {...props} />
  )
}
