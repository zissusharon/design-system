import React, { FC } from 'react';
import { DialogTitleProps } from 'src/components/Dialog/Dialog.types';
import styled, { css } from 'styled-components';

export const DialogTitle: FC<DialogTitleProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.h2`
  ${({ theme }) => css`
    ${css(theme.typography.heading)}
    display: flex;
    align-items: center;
    gap: ${theme.spacing(16)};
  `}
`;
