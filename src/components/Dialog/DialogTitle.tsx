import React, { ReactNode, FC } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  children: ReactNode;
}

export const DialogTitle: FC<Props> = ({ children }) => {
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
