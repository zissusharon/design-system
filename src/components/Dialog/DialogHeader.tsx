import React, { ReactNode, FC } from 'react';
import { RiCloseLargeFill } from 'react-icons/ri';
import { IconButton } from 'src/components/Button/IconButton/IconButton';
import styled, { css } from 'styled-components';

interface Props {
  children: ReactNode;
  onClose?: (
    event: React.MouseEvent<HTMLButtonElement>,
    reason: 'closeButtonClick',
  ) => void;
}

export const DialogHeader: FC<Props> = ({ children, onClose }) => (
  <Container>
    {children}

    {onClose && (
      <CloseIconButtonContainer>
        <IconButton
          variant="outlined"
          color="inherit"
          onClick={(event) => onClose(event, 'closeButtonClick')}
          icon={RiCloseLargeFill}
        />
      </CloseIconButtonContainer>
    )}
  </Container>
);

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: ${theme.spacing(24)};
    flex-shrink: 0;
    gap: ${theme.spacing(8)};
  `}
`;

const CloseIconButtonContainer = styled.div`
  align-self: flex-start;
`;
