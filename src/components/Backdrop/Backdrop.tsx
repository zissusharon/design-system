import React, { FC, MouseEvent } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  isOpen: boolean;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export const Backdrop: FC<Props> = ({ isOpen, onClick }) => (
  <Container isOpen={isOpen} onClick={onClick} />
);

const Container = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    height: 100%;
    width: 100%;
    opacity: ${isOpen ? 0.6 : 0};
    background-color: ${theme.palette.common.black};
    transition: opacity 0.3s ease-in-out;
  `}
`;
