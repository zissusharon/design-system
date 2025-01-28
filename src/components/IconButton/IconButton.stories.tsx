import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FiPlus, FiSearch, FiTrash2 } from 'react-icons/fi';
import { Flex, IconButton } from 'src/components';
import styled, { css } from 'styled-components';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      table: {
        type: { summary: 'default | contained | outlined' },
        defaultValue: { summary: 'default' },
      },
    },
    color: {
      table: {
        type: { summary: 'primary | inherit | error' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      table: {
        type: { summary: 'md' },
        defaultValue: { summary: 'md' },
      },
    },
    icon: {
      description: 'icon component from react-icons',
      table: {
        type: { summary: 'IconType' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Basic: Story = {
  render: () => (
    <Flex gap={12}>
      <IconButton icon={FiSearch} variant="default" />
      <IconButton icon={FiPlus} variant="contained" />
      <IconButton icon={FiTrash2} variant="outlined" />
    </Flex>
  ),
};

export const Color: Story = {
  render: () => (
    <Flex direction="column" gap={32}>
      <Flex direction="column" gap={16}>
        <SectionTitle>Default</SectionTitle>

        <Flex gap={16}>
          <IconButton icon={FiSearch} variant="default" color="inherit" />
          <IconButton icon={FiSearch} variant="default" color="primary" />
          <IconButton icon={FiSearch} variant="default" color="error" />
        </Flex>
      </Flex>

      <Flex gap={16}>
        <Flex direction="column" gap={16}>
          <SectionTitle>Contained</SectionTitle>

          <Flex gap={16}>
            <IconButton icon={FiPlus} variant="contained" color="inherit" />
            <IconButton icon={FiPlus} variant="contained" color="primary" />
            <IconButton icon={FiPlus} variant="contained" color="error" />
          </Flex>
        </Flex>
      </Flex>

      <Flex gap={16}>
        <Flex direction="column" gap={16}>
          <SectionTitle>Outlined</SectionTitle>

          <Flex gap={16}>
            <IconButton icon={FiTrash2} variant="outlined" color="inherit" />
            <IconButton icon={FiTrash2} variant="outlined" color="primary" />
            <IconButton icon={FiTrash2} variant="outlined" color="error" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  ),
};

const SectionTitle = styled.h3`
  ${({ theme }) => css`
    ${css(theme.typography.body1)}
    margin: 0;
    color: ${theme.palette.text.secondary};
  `}
`;
