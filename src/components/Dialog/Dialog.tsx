import React, { FC } from 'react';
import { Modal, ModalProps } from 'src/components/Modal/Modal';
import { ModalSize } from 'src/components/Modal/Modal.types';
import {
  dialogBaseStyle,
  dialogSizeStyle,
} from 'src/components/Dialog/Dialog.styles';
import styled, { css } from 'styled-components';

interface Props extends ModalProps {
  size?: 'sm';
}

export const Dialog: FC<Props> = ({ size = 'sm', children, ...rest }) => (
  <Modal {...rest}>
    <DialogContainer size={size}>{children}</DialogContainer>
  </Modal>
);

const DialogContainer = styled.div<{ size: ModalSize }>`
  ${({ theme, size }) => css`
    ${dialogBaseStyle(theme)};
    ${dialogSizeStyle[size]};
  `}
`;
