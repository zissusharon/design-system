import React, { FC, ReactNode } from 'react';
import { Flex } from 'src/components/Flex/Flex';
import styled, { css } from 'styled-components';

interface Props {
  title: string;
  description: ReactNode;
  action?: ReactNode;
  bordered?: boolean;
  disableSpacing?: boolean;
}

export const Card: FC<Props> = ({
  title,
  description,
  action,
  bordered = true,
  disableSpacing = false,
}) => (
  <Container
    justify="space-between"
    gap={16}
    bordered={bordered}
    disableSpacing={disableSpacing}
  >
    <Flex direction="column">
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Flex>

    {action && action}
  </Container>
);

const Container = styled(Flex)<{ bordered: boolean; disableSpacing: boolean }>`
  ${({ theme, bordered, disableSpacing }) => css`
    padding: ${disableSpacing ? 0 : theme.spacing(24)};
    border: ${bordered ? `1px solid ${theme.palette.gray[200]} ` : 'none'};
    border-radius: 8px;
  `}
`;

const Title = styled.h2`
  ${({ theme }) => css`
    ${css(theme.typography.body1)}
    color: ${theme.palette.text.primary};
    margin-bottom: ${theme.spacing(4)};
  `}
`;

const Description = styled.p`
  ${({ theme }) => css`
    ${css(theme.typography.body4)}
    color: ${theme.palette.text.secondary};
    max-width: 512px;
  `}
`;
