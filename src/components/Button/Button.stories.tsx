import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { FiPlus, FiDownload, FiEdit } from 'react-icons/fi';
import styled from 'styled-components';

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
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
        defaultValue: { summary: 'inherit' },
      },
      control: 'select',
      options: ['primary', 'inherit', 'error'],
    },
    size: {
      description: 'The size of the button',
      table: {
        type: { summary: 'sm | md' },
        defaultValue: { summary: 'md' },
      },
      control: 'select',
      options: ['sm', 'md'],
    },
    icon: {
      description: 'Icon component from react-icons',
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
      control: 'select',
      options: ['start', 'end'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
    color: 'primary',
  },
};

export const AllVariants = {
  render: () => (
    <Flex>
      <Flex>
        <SectionTitle>Contained</SectionTitle>

        <ButtonGroup>
          <Button variant="contained" color="primary">
            Primary
          </Button>

          <Button variant="contained" color="inherit">
            Secondary
          </Button>

          <Button variant="contained" color="error">
            Error
          </Button>
        </ButtonGroup>
      </Flex>

      <Section>
        <SectionTitle>Outlined</SectionTitle>

        <ButtonGroup>
          <Button variant="outlined" color="primary">
            Primary
          </Button>

          <Button variant="outlined" color="inherit">
            Secondary
          </Button>

          <Button variant="outlined" color="error">
            Error
          </Button>
        </ButtonGroup>
      </Section>

      <Section>
        <SectionTitle>Default</SectionTitle>

        <ButtonGroup>
          <Button variant="default" color="primary">
            Primary
          </Button>

          <Button variant="default" color="inherit">
            Secondary
          </Button>

          <Button variant="default" color="error">
            Error
          </Button>
        </ButtonGroup>
      </Section>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Overview of all button variants and colors.',
      },
    },
  },
};

export const Sizes = {
  render: () => (
    <Flex>
      <Section>
        <SectionTitle>Medium (Default)</SectionTitle>

        <ButtonGroup>
          <Button variant="contained" size="md">
            Contained
          </Button>

          <Button variant="outlined" size="md">
            Outlined
          </Button>

          <Button variant="default" size="md">
            Default
          </Button>
        </ButtonGroup>
      </Section>

      <Section>
        <SectionTitle>Small</SectionTitle>

        <ButtonGroup>
          <Button variant="contained" size="sm">
            Contained
          </Button>

          <Button variant="outlined" size="sm">
            Outlined
          </Button>

          <Button variant="default" size="sm">
            Default
          </Button>
        </ButtonGroup>
      </Section>
    </Flex>
  ),
};

export const WithIcons = {
  render: () => (
    <Flex>
      <Section>
        <SectionTitle>Start Icon</SectionTitle>

        <ButtonGroup>
          <Button variant="contained" icon={FiPlus}>
            Add Item
          </Button>

          <Button variant="outlined" icon={FiDownload}>
            Download
          </Button>

          <Button variant="default" icon={FiEdit}>
            Edit
          </Button>
        </ButtonGroup>
      </Section>

      <Section>
        <SectionTitle>End Icon</SectionTitle>

        <ButtonGroup>
          <Button variant="contained" icon={FiPlus} iconPlacement="end">
            Add Item
          </Button>

          <Button variant="outlined" icon={FiDownload} iconPlacement="end">
            Download
          </Button>

          <Button variant="default" icon={FiEdit} iconPlacement="end">
            Edit
          </Button>
        </ButtonGroup>
      </Section>
    </Flex>
  ),
};

const Flex = styled.div`
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
`;
