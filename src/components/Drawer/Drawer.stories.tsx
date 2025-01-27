import { Meta, StoryObj } from '@storybook/react';
import React, { FC, useState } from 'react';
import { Button } from 'src/components/Button/Button';
import { Drawer, DrawerAnchor } from './Drawer';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const AlertDialogStoryComponent: FC<{ anchor: DrawerAnchor }> = ({
  anchor,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>{anchor}</Button>

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        anchor={anchor}
        title="Vendor details"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing Nullam a arcu est.
        Nulla facilisi. Donec nec sem aliquet, laoreet nisi et, bibendum tellus.
        Aenean sed nibh lorem.
      </Drawer>
    </>
  );
};

export const Default: Story = {
  name: 'Drawer',
  render: () => {
    return (
      <>
        {Object.values(DrawerAnchor).map((anchor) => (
          <AlertDialogStoryComponent
            key={anchor}
            anchor={anchor as DrawerAnchor}
          />
        ))}
      </>
    );
  },
};

// export const WithOutCloseIconButton: Story = {
//   name: 'Alert Modal',
//   render: () => AlertDialogStoryComponent(),
// };
