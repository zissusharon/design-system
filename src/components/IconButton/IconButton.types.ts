import { IconType } from 'react-icons';
import { ButtonProps, ButtonSize } from 'src/components/Button/Button.types';

export interface IconButtonProps
  extends Omit<ButtonProps, 'children' | 'size' | 'iconPlacement'> {
  icon: IconType;
  size?: IconButtonSize;
}

export type IconButtonSize = Exclude<ButtonSize, 'sm'>;
