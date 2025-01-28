import { Meta, StoryObj } from '@storybook/react';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { DrawerPlacement } from './Drawer';
import { Button, Drawer, Flex } from 'src/components';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Drawer component implemented on top of the Modal component`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      table: {
        type: { summary: 'left | top | right | bottom' },
        defaultValue: { summary: 'right' },
      },
    },
    size: {
      table: {
        type: { summary: 'sm | md' },
        defaultValue: { summary: 'md' },
      },
    },
    disableEscapeKeyDown: {
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const AlertDialogStoryComponent: FC<{
  placement: DrawerPlacement;
  size?: 'sm' | 'md';
  title: string;
}> = ({ placement, size, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="sm"
        onClick={() => setIsOpen(true)}
      >
        {placement}
      </Button>

      <Drawer
        isOpen={isOpen}
        size={size}
        onClose={() => setIsOpen(false)}
        placement={placement}
        title={title}
      >
        <DrawerContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing Nullam a arcu est.
          Nulla facilisi. Donec nec sem aliquet, laoreet nisi et, bibendum
          tellus. Aenean sed nibh lorem.
        </DrawerContent>
      </Drawer>
    </>
  );
};

const DrawerContent = styled.div`
  padding: ${({ theme }) => theme.spacing(16)};
`;

const drawerPlacements = ['left', 'top', 'right', 'bottom'];

export const MediumSize: Story = {
  render: () => (
    <Flex gap={8}>
      {drawerPlacements.map((placement) => (
        <AlertDialogStoryComponent
          key={placement}
          placement={placement as DrawerPlacement}
          title="Medium Size"
        />
      ))}
    </Flex>
  ),
};

export const SmallSize: Story = {
  render: () => (
    <Flex gap={8}>
      {drawerPlacements.map((placement) => (
        <AlertDialogStoryComponent
          key={placement}
          placement={placement as DrawerPlacement}
          size="sm"
          title="Small Size"
        />
      ))}
    </Flex>
  ),
};
