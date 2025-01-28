import { ButtonColor } from 'src/components/Button/Button.types';
import { css, DefaultTheme } from 'styled-components';
import {
  containedButtonStyles,
  defaultButtonStyles,
  outlinedButtonStyles,
} from 'src/components/Button/Button.styles';

export const outlinedIconButtonStyles = (
  theme: DefaultTheme,
  color: ButtonColor,
) => css`
  ${outlinedButtonStyles(theme, color)}

  @media (max-width: 500px) {
    border: none;
  }
`;

export const mediumSizeStyles = (theme: DefaultTheme) => css`
  padding: ${theme.spacing(8)};
  height: 40px;
  width: 40px;
`;

export const iconButtonVariantStyles = {
  contained: containedButtonStyles,
  outlined: outlinedIconButtonStyles,
  default: defaultButtonStyles,
};

export const iconButtonSizeStyles = {
  md: mediumSizeStyles,
};

export const iconButtonSizeValue = {
  md: 24,
};
