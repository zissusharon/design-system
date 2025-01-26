import { ButtonSize, ButtonVariant } from 'src/components/Button/Button.types';

export type IconButtonSize = Exclude<ButtonSize, 'sm'>;
export type IconButtonVariant = Exclude<ButtonVariant, 'critical'>;
