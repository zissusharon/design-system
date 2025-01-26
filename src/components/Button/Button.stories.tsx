import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from 'src/components/Button/Button';
import styled from 'styled-components';

const meta: Meta<typeof Button> = {
  title: 'Design System/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Variants: Story = {
  render: function Variants() {
    return (
      <Flex>
        <Button variant="primary">Primary</Button>

        <Button variant="secondary">Secondary</Button>

        <Button variant="tertiary">Tertiary</Button>
      </Flex>
    );
  },
};

export const Sizes: Story = {
  render: function Sizes() {
    return (
      <Flex>
        <Flex direction="column">
          <Button variant="primary" size="sm">
            Primary (sm)
          </Button>

          <Button variant="primary" size="md">
            Primary (md)
          </Button>
        </Flex>

        <Flex direction="column">
          <Button variant="secondary" size="sm">
            Secondary (sm)
          </Button>

          <Button variant="secondary" size="md">
            Secondary (md)
          </Button>
        </Flex>

        <Flex direction="column">
          <Button variant="tertiary" size="sm">
            Tertiary (sm)
          </Button>

          <Button variant="tertiary" size="md">
            Tertiary (md)
          </Button>
        </Flex>
      </Flex>
    );
  },
};

export const Critical: Story = {
  render: () => (
    <Button variant="critical" size="md">
      Delete
    </Button>
  ),
};

const Flex = styled.div<{ direction?: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) =>
    `${direction === 'row' ? 'row' : 'column'}`};
  gap: 8px;
`;
