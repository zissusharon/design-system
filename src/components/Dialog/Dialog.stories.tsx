import React, { useState } from 'react';
import { AlertDialog, Dialog } from 'src/components';
import { Button } from 'src/components/Button/Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Dialog component implemented on top of the Modal component.
               
- **Dialog**: The parent component that renders the modal
- **Dialog.Title**: A wrapper used for the title of a Dialog
- **Dialog.Header**: A container for the Dialog's title and optional close button
- **Dialog.Body**: A container for displaying the Dialog's main content
- **Dialog.Footer**: An optional container for Dialog's action buttons
      
The Dialog component provides a structured way to present important information and gather user input while maintaining focus on the specific task at hand.`,
      },
    },
  },
  argTypes: {
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
type Story = StoryObj<typeof Dialog>;

export const SimpleDialog: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
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

        <Dialog isOpen={isOpen} onClose={closeDialog}>
          <Dialog.Header>
            <Dialog.Title>Simple Dialog</Dialog.Title>
          </Dialog.Header>
          Lorem ipsum dolor sit amet, consectetur adipiscing Nullam a arcu est.
          Nulla facilisi. Donec nec sem aliquet, laoreet nisi et, bibendum
          tellus. Aenean sed nibh lorem.
        </Dialog>
      </>
    );
  },
};

export const AlertDialogStory: Story = {
  name: 'Alert Dialog',
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
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
          Nulla facilisi. Donec nec sem aliquet, laoreet nisi et, bibendum
          tellus. Aenean sed nibh lorem.
        </AlertDialog>
      </>
    );
  },
};
