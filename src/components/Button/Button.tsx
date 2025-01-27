import React, { FC } from 'react';
import {
  ButtonColor,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from 'src/components/Button/Button.types';
import {
  buttonSizeStyles,
  buttonVariantStyles,
} from 'src/components/Button/Button.utils';
import { baseButtonStyles } from 'src/components/Button/Button.styles';
import styled, { css } from 'styled-components';

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
    {IconComponent && iconPlacement === 'start' && <IconComponent size={16} />}

    {children}

    {IconComponent && iconPlacement === 'end' && <IconComponent size={16} />}
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
