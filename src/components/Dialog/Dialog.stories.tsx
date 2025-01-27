import React, { FC, useState } from 'react';
import { AlertDialog } from 'src/components/AlertDialog/AlertDialog';
import { Button } from 'src/components/Button/Button';
import { Meta, StoryObj } from '@storybook/react';
import { Dialog } from 'src/components/Dialog/Dialog';
import { Modal } from 'src/components/Modal/Modal';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialogs',
  component: Dialog,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Dialog>;

const AlertDialogStoryComponent: FC<{ initialIsOpen?: boolean }> = ({
  initialIsOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsOpen(true)}
      >
        Open Dialog
      </Button>

      <AlertDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Alert Dialog"
        submitButtonProps={{ onClick: () => {} }}
        closeButtonProps={{ onClick: closeDialog }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing Nullam a arcu est.
        Nulla facilisi. Donec nec sem aliquet, laoreet nisi et, bibendum tellus.
        Aenean sed nibh lorem.
      </AlertDialog>
    </>
  );
};

export const Dialog2: Story = {
  name: 'Dialog',
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    const closeDialog = () => setIsOpen(false);

    return (
      <>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsOpen(true)}
        >
          Open Dialog
        </Button>

        {/*<Dialog isOpen={isOpen} onClose={closeDialog}>*/}
        {/*  <DialogHeader onClose={closeDialog}>I am a Dialog!</DialogHeader>*/}
        {/*</Dialog>*/}

        <Modal isOpen={isOpen} onClose={closeDialog}>
          <div>dfsdfsdf</div>
        </Modal>
      </>
    );
  },
};

export const AlertDialogStory: Story = {
  name: 'Alert Dialog',
  render: () => <AlertDialogStoryComponent />,
};

export const AlertDialogStoryd: Story = {
  name: 'Alert Dialog',
  render: () => <AlertDialogStoryComponent initialIsOpen={true} />,
};
