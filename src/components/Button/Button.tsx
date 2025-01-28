import React, { FC } from 'react';
import {
  ButtonColor,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from 'src/components/Button/Button.types';

import {
  baseButtonStyles,
  buttonSizeStyles,
  buttonVariantStyles,
} from 'src/components/Button/Button.styles';
import styled, { css } from 'styled-components';

const ICON_SIZE = 16;

export const Button: FC<ButtonProps> = ({
  variant = 'default',
  color = 'inherit',
  size = 'md',
  icon: IconComponent = null,
  iconPlacement = 'start',
  children,
  ...rest
}) => (
  <Container variant={variant} size={size} color={color} {...rest}>
    {IconComponent && iconPlacement === 'start' && (
      <IconComponent size={ICON_SIZE} />
    )}

    {children}

    {IconComponent && iconPlacement === 'end' && (
      <IconComponent size={ICON_SIZE} />
    )}
  </Container>
);

const Container = styled.button<{
  variant: ButtonVariant;
  size: ButtonSize;
  color: ButtonColor;
}>`
  ${({ theme, variant, size, color }) => css`
    ${baseButtonStyles(theme)};
    ${buttonVariantStyles[variant](theme, color)};
    ${buttonSizeStyles[size](theme)};
  `}
`;
