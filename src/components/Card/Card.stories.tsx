import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RiMoreFill } from 'react-icons/ri';
import { Button, Card, IconButton } from 'src/components';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    bordered: {
      description: 'The variant of the button',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: () => (
    <Card
      title="Request delivery details"
      description="We'll email your vendor to set their delivery method."
    />
  ),
};

export const WithoutBorder: Story = {
  render: () => (
    <Card
      title="Request delivery details"
      description="We'll email your vendor to set their delivery method."
      bordered={false}
    />
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card
      title="Request delivery details"
      description="We'll email your vendor to set their delivery method."
      action={
        <Button variant="contained" color="primary" size="sm">
          Send Request
        </Button>
      }
    />
  ),
};

export const DisableSpacing: Story = {
  render: () => (
    <Card
      title="eBills"
      description="Subscribe to get bills from this vendor electronically to manage and pay them in one place."
      action={
        <IconButton icon={RiMoreFill} variant="outlined" color="inherit" />
      }
      bordered={false}
      disableSpacing
    />
  ),
};
