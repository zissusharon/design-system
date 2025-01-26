import { css, DefaultTheme } from 'styled-components';
import {
  variantSecondaryStyles as buttonVariantSecondaryStyles,
  variantTertiaryStyles as buttonVariantTertiaryStyles,
} from 'src/components/Button/Button.styles';

export const variantSecondaryStyles = (theme: DefaultTheme) => css`
  ${buttonVariantSecondaryStyles(theme)}

  @media (max-width: 500px) {
    border: none;
  }
`;

export const variantTertiaryStyles = (theme: DefaultTheme) => css`
  ${buttonVariantTertiaryStyles(theme)};
  color: ${theme.palette.text.primary};
`;

export const mediumSizeStyles = (theme: DefaultTheme) => css`
  height: 40px;
  padding: ${theme.spacing(8)};
  width: 40px;
`;
