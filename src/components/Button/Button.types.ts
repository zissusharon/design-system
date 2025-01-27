import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  icon?: IconType;
  iconPlacement?: 'start' | 'end';
}

export type ButtonSize = 'sm' | 'md';
export type ButtonVariant = 'default' | 'contained' | 'outlined';
export type ButtonColor = 'primary' | 'inherit' | 'error';
