import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconType;
  iconPlacement?: 'start' | 'end';
}

export type ButtonSize = 'sm' | 'md';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'critical';
