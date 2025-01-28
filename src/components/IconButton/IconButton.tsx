import React, { FC } from 'react';
import { baseButtonStyles } from 'src/components/Button/Button.styles';
import {
  iconButtonSizeStyles,
  iconButtonSizeValue,
  iconButtonVariantStyles,
} from 'src/components/IconButton/IconButton.styles';
import {
  IconButtonProps,
  IconButtonSize,
} from 'src/components/IconButton/IconButton.types';
import styled, { css } from 'styled-components';

import { ButtonColor, ButtonVariant } from 'src/components/Button/Button.types';

export const IconButton: FC<IconButtonProps> = ({
  icon: IconComponent,
  variant = 'default',
  color = 'primary',
  size = 'md',
  ...rest
}) => (
  <Container variant={variant} size={size} color={color} {...rest}>
    <IconComponent size={iconButtonSizeValue[size]} />
  </Container>
);

const Container = styled.button<{
  variant: ButtonVariant;
  size: IconButtonSize;
  color: ButtonColor;
}>`
  ${({ theme, variant, size, color }) => css`
    ${baseButtonStyles(theme)}
    ${iconButtonVariantStyles[variant](theme, color)}
    ${iconButtonSizeStyles[size](theme)}
    
    svg {
      flex-shrink: 0;
    }
  `}
`;
