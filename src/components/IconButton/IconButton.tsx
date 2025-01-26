import React, { FC } from 'react';
import { IconType } from 'react-icons';
import { baseButtonStyles } from 'src/components/Button/Button.styles';
import {
  iconButtonSizeStyles,
  iconButtonVariantStyles,
} from 'src/components/IconButton/IconButton.constants';
import {
  IconButtonSize,
  IconButtonVariant,
} from 'src/components/IconButton/IconButton.types';
import styled, { css } from 'styled-components';

import { ButtonProps } from 'src/components/Button/Button.types';

interface IconButtonProps extends Omit<ButtonProps, 'children' | 'size'> {
  icon: IconType;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
}

export const IconButton: FC<IconButtonProps> = ({
  icon: IconComponent,
  variant = 'primary',
  size = 'md',
  ...rest
}) => {
  return (
    <StyledContainer variant={variant} size={size} {...rest}>
      <IconComponent size={24} />
    </StyledContainer>
  );
};

const StyledContainer = styled.button<{
  variant: IconButtonVariant;
  size: IconButtonSize;
}>`
  ${({ theme, variant, size }) => css`
    ${baseButtonStyles(theme)}
    ${iconButtonVariantStyles[variant](theme)}
    ${iconButtonSizeStyles[size](theme)}
  `}
`;
