import React, { FC } from 'react';
import { RiCloseLargeFill } from 'react-icons/ri';
import { IconButton } from 'src/components';
import { IconButtonSize } from 'src/components/IconButton/IconButton.types';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: IconButtonSize;
}

export const CloseButton: FC<Props> = ({ onClick, size }) => (
  <IconButton
    variant="outlined"
    color="inherit"
    onClick={onClick}
    icon={RiCloseLargeFill}
    size={size}
  />
);
