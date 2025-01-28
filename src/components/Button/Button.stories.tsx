import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Flex } from 'src/components/Flex/Flex';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { IoMdSend } from 'react-icons/io';
import { Button } from 'src/components';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile button component that supports different variants, colors, sizes, and icon placements.',
      },
    },
  },
  argTypes: {
    variant: {
      table: {
        type: { summary: 'default | contained | outlined' },
        defaultValue: { summary: 'default' },
      },
      options: ['default', 'contained', 'outlined'],
    },
    color: {
      table: {
        type: { summary: 'primary | inherit | error' },
        defaultValue: { summary: 'inherit' },
      },
      options: ['primary', 'inherit', 'error'],
    },
    size: {
      table: {
        type: { summary: 'sm | md' },
        defaultValue: { summary: 'md' },
      },
      options: ['sm', 'md'],
    },
    icon: {
      description: 'icon component from react-icons',
      table: {
        type: { summary: 'IconType' },
      },
    },
    iconPlacement: {
      description: 'Position of the icon',
      table: {
        type: { summary: 'start | end' },
        defaultValue: { summary: 'start' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  render: () => (
    <Flex gap={12}>
      <Button variant="default">Default</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Flex>
  ),
};

export const Color: Story = {
  render: () => (
    <Flex gap={12}>
      <Flex direction="column" gap={12}>
        <Button variant="default" color="inherit">
          Inherit
        </Button>

        <Button variant="default" color="primary">
          Primary
        </Button>

        <Button variant="default" color="error">
          Error
        </Button>
      </Flex>

      <Flex direction="column" gap={12}>
        <Button variant="contained" color="inherit">
          Inherit
        </Button>

        <Button variant="contained" color="primary">
          Primary
        </Button>

        <Button variant="contained" color="error">
          Error
        </Button>
      </Flex>

      <Flex direction="column" gap={12}>
        <Button variant="outlined" color="inherit">
          Inherit
        </Button>

        <Button variant="outlined" color="primary">
          Primary
        </Button>

        <Button variant="outlined" color="error">
          Error
        </Button>
      </Flex>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex gap={12}>
      <Flex direction="column" gap={16}>
        <Button variant="default" color="primary" size="sm">
          Small
        </Button>

        <Button variant="default" color="primary" size="md">
          Medium
        </Button>
      </Flex>

      <Flex direction="column" gap={16}>
        <Button variant="contained" color="primary" size="sm">
          Small
        </Button>

        <Button variant="contained" color="primary" size="md">
          Medium
        </Button>
      </Flex>

      <Flex direction="column" gap={16}>
        <Button variant="outlined" size="sm">
          Small
        </Button>

        <Button variant="outlined" size="md">
          Medium
        </Button>
      </Flex>
    </Flex>
  ),
};

export const ButtonWithIcon: Story = {
  name: 'Buttons with icons and label',
  render: () => (
    <Flex gap={12}>
      <Button variant="outlined" color="inherit" icon={RiDeleteBin5Line}>
        Contained
      </Button>

      <Button
        variant="contained"
        color="primary"
        icon={IoMdSend}
        iconPlacement="end"
      >
        Outlined
      </Button>
    </Flex>
  ),
};
