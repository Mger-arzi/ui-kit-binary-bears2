import type { StoryObj } from '@storybook/react-vite'
import { Input } from './input'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Ui kit Input component',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    onChange: { action: 'changed' },
    type: {
      control: 'radio',
      options: ['text', 'password', 'search', 'email', 'number'],
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label text',
    placeholder: 'Placeholder text',
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    label: 'Email',
    placeholder: 'Epam@epam.com',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: '**********',
  },
}

export const Search: Story = {
  args: {
    type: 'search',
    label: 'Search',
    placeholder: 'Input search',
  },
}

export const Error: Story = {
  args: {
    error: 'Error text',
    label: 'Label text',
    placeholder: 'Placeholder text',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Label text',
    placeholder: 'Placeholder text',
  },
}
