import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { IconButton } from 'src/components/IconButton/IconButton';
import { LuRefreshCw } from 'react-icons/lu';

const meta: Meta<typeof IconButton> = {
  title: 'Design System/Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  render: function Default() {
    return <IconButton icon={LuRefreshCw} />;
  },
};

export const Primary: Story = {
  render: function Primary() {
    return <IconButton variant="primary" icon={LuRefreshCw} />;
  },
};

export const Secondary: Story = {
  render: function Secondary() {
    return <IconButton variant="secondary" icon={LuRefreshCw} />;
  },
};

export const Tertiary: Story = {
  render: function Tertiary() {
    return <IconButton variant="tertiary" icon={LuRefreshCw} />;
  },
};
