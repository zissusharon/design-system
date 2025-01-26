import React, { FC } from 'react';
import {
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from 'src/components/Button/Button.types';
import {
  buttonSizeStyles,
  buttonVariantStyles,
} from 'src/components/Button/Button.constans';
import { baseButtonStyles } from 'src/components/Button/Button.styles';
import styled, { css } from 'styled-components';

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: IconComponent = null,
  iconPlacement = 'start',
  children,
  ...rest
}) => (
  <StyledContainer variant={variant} size={size} {...rest}>
    {IconComponent && iconPlacement === 'start' && <IconComponent size={16} />}

    {children}

    {IconComponent && iconPlacement === 'end' && <IconComponent size={16} />}
  </StyledContainer>
);

const StyledContainer = styled.button<{
  variant: ButtonVariant;
  size: ButtonSize;
}>`
  ${({ theme, variant, size }) => css`
    ${baseButtonStyles(theme)};
    ${buttonVariantStyles[variant](theme)};
    ${buttonSizeStyles[size](theme)};
  `}
`;
