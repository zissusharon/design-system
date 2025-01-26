import { css, DefaultTheme } from 'styled-components';

export const baseButtonStyles = (theme: DefaultTheme) => css`
  ${css(theme.typography.body2)};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  line-height: 20px;
  border: none;
  cursor: pointer;
`;

export const variantPrimaryStyles = (theme: DefaultTheme) => css`
  color: ${theme.palette.text.inverse};
  background-color: ${theme.palette.primary.main};
`;

export const variantSecondaryStyles = (theme: DefaultTheme) => css`
  color: ${theme.palette.text.primary};
  background-color: ${theme.palette.common.white};
  border: 1px solid ${theme.palette.grey[50]};
`;

export const variantTertiaryStyles = (theme: DefaultTheme) => css`
  color: ${theme.palette.primary.main};
  background-color: transparent;

  &:hover {
    color: ${theme.palette.primary.main};
    text-decoration: underline;
  }
`;

export const variantCriticalStyles = (theme: DefaultTheme) => css`
  color: ${theme.palette.text.inverse};
  background-color: ${theme.palette.error.main};
`;

export const smallSizeStyles = (theme: DefaultTheme) => css`
  height: 32px;
  padding: 0 ${theme.spacing(8)};
  min-width: 100px;
`;

export const mediumSizeStyles = (theme: DefaultTheme) => css`
  height: 40px;
  padding: 0 ${theme.spacing(20)};
  min-width: 120px;
`;
