import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
}

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
}

export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary',
    disabled: true,
    children: 'Button',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
}

export const OutlineDisabled: Story = {
  args: {
    variant: 'outline',
    disabled: true,
    children: 'Button',
  },
}

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Button',
  },
}

export const TextButton: Story = {
  args: {
    variant: 'textButton',
    children: 'Button',
  },
}

export const TextButtonDisabled: Story = {
  args: {
    variant: 'textButton',
    disabled: true,
    children: 'Button',
  },
}

export const AsLink: Story = {
  render: () => (
    <Button asChild variant="primary">
      <a href="#">Button as link</a>
    </Button>
  ),
}

export const LinkVariant: Story = {
  args: {
    variant: 'asLink',
    children: 'Styled link',
  },
}

export const LinkVariantDisabled: Story = {
  args: {
    variant: 'asLink',
    disabled: true,
    children: 'Disabled link',
  },
}