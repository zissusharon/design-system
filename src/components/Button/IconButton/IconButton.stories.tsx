import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { IconButton } from 'src/components/Button/IconButton/IconButton';
import { FiPlus, FiSearch, FiTrash2 } from 'react-icons/fi';
import styled from 'styled-components';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The variant of the button',
      table: {
        type: { summary: 'default | contained | outlined' },
        defaultValue: { summary: 'default' },
      },
      control: 'select',
      options: ['default', 'contained', 'outlined'],
    },
    color: {
      description: 'The color of the button',
      table: {
        type: { summary: 'primary | inherit | error' },
        defaultValue: { summary: 'primary' },
      },
      control: 'select',
      options: ['primary', 'inherit', 'error'],
    },
    'aria-label': {
      description: 'Accessible label for the button',
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Basic: Story = {
  args: {
    icon: FiSearch,
    'aria-label': 'Search',
    variant: 'contained',
    color: 'primary',
  },
};

export const AllVariants = {
  render: () => (
    <Grid>
      <Section>
        <SectionTitle>Contained</SectionTitle>
        <ButtonGroup>
          <IconButton
            icon={FiSearch}
            variant="contained"
            color="primary"
            aria-label="Search"
          />
          <IconButton
            icon={FiPlus}
            variant="contained"
            color="inherit"
            aria-label="Add"
          />
          <IconButton
            icon={FiTrash2}
            variant="contained"
            color="error"
            aria-label="Delete"
          />
        </ButtonGroup>
      </Section>

      <Section>
        <SectionTitle>Outlined</SectionTitle>
        <ButtonGroup>
          <IconButton
            icon={FiSearch}
            variant="outlined"
            color="primary"
            aria-label="Search"
          />
          <IconButton
            icon={FiPlus}
            variant="outlined"
            color="inherit"
            aria-label="Add"
          />
          <IconButton
            icon={FiTrash2}
            variant="outlined"
            color="error"
            aria-label="Delete"
          />
        </ButtonGroup>
      </Section>

      <Section>
        <SectionTitle>Default</SectionTitle>
        <ButtonGroup>
          <IconButton
            icon={FiSearch}
            variant="default"
            color="primary"
            aria-label="Search"
          />
          <IconButton
            icon={FiPlus}
            variant="default"
            color="inherit"
            aria-label="Add"
          />
          <IconButton
            icon={FiTrash2}
            variant="default"
            color="error"
            aria-label="Delete"
          />
        </ButtonGroup>
      </Section>
    </Grid>
  ),
};

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 800px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
`;
