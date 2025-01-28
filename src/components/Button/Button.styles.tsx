import { ButtonColor } from 'src/components/Button/Button.types';
import { css, DefaultTheme } from 'styled-components';

export const baseButtonStyles = (theme: DefaultTheme) => css`
  ${css(theme.typography.body2)};
  color: ${theme.palette.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  line-height: 20px;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
`;

export const defaultButtonStyles = (
  theme: DefaultTheme,
  color: ButtonColor,
) => css`
  color: ${buttonColorValue(color, theme)};
  background-color: transparent;

  &:hover {
    text-decoration: underline;
  }
`;

export const containedButtonStyles = (
  theme: DefaultTheme,
  color: ButtonColor,
) => {
  if (color === 'inherit') {
    return css`
      color: inherit;
      background-color: revert;
    `;
  }

  return css`
    color: ${theme.palette.text.inverse};
    background-color: ${buttonColorValue(color, theme)};
  `;
};

export const outlinedButtonStyles = (
  theme: DefaultTheme,
  color: ButtonColor,
) => css`
  color: ${buttonColorValue(color, theme)};
  background-color: ${theme.palette.common.white};
  border: 1px solid ${theme.palette.gray[50]};
`;

export const smallSizeStyles = (theme: DefaultTheme) => css`
  height: 32px;
  padding: 0 ${theme.spacing(8)};
  min-width: 80px;
`;

export const mediumSizeStyles = (theme: DefaultTheme) => css`
  height: 40px;
  padding: 0 ${theme.spacing(20)};
  min-width: 120px;
`;

export const buttonColorValue = (color: ButtonColor, theme: DefaultTheme) =>
  color === 'inherit' ? 'inherit' : theme.palette.action[color];

export const buttonVariantStyles = {
  default: defaultButtonStyles,
  contained: containedButtonStyles,
  outlined: outlinedButtonStyles,
};

export const buttonSizeStyles = {
  sm: smallSizeStyles,
  md: mediumSizeStyles,
};
