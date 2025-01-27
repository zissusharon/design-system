import React, { FC } from 'react';
import { IconType } from 'react-icons';
import { baseButtonStyles } from 'src/components/Button/Button.styles';
import {
  iconButtonSizeStyles,
  iconButtonVariantStyles,
} from 'src/components/Button/IconButton/IconButton.constants';
import { IconButtonSize } from 'src/components/Button/IconButton/IconButton.types';
import styled, { css } from 'styled-components';

import {
  ButtonColor,
  ButtonProps,
  ButtonVariant,
} from 'src/components/Button/Button.types';

interface IconButtonProps
  extends Omit<ButtonProps, 'children' | 'size' | 'iconPlacement'> {
  icon: IconType;
  size?: IconButtonSize;
}

export const IconButton: FC<IconButtonProps> = ({
  icon: IconComponent,
  variant = 'default',
  color = 'primary',
  size = 'md',
  ...rest
}) => (
  <Container variant={variant} size={size} color={color} {...rest}>
    <IconComponent size={24} />
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
