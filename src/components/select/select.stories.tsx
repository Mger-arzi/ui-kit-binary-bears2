import { Select } from './select'
import type { StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Select component built on Radix UI primitives, featuring pagination support and flexible styling options.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    options: {
      control: false,
    },
    pagination: {
      control: false,
      description: 'Props changing styles for pagination',
    },
    portal: {
      control: 'boolean',
      description: 'Render a drop-down list through Portal',
    },
    onValueChange: {
      action: 'Value changed',
      description: 'Callback for change current value',
    },
    // Скрывает технические пропсы
    className: { table: { disable: true } },
    classNames: { table: { disable: true } },
  },
  args: {
    portal: true,
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof meta>

const paginationOptions = [
  { name: '100', value: '100' },
  { name: '70', value: '70' },
  { name: '50', value: '50' },
]
const defaultOptions = [
  { name: 'Select-box1', value: 'Select-box1' },
  { name: 'Select-box2', value: 'Select-box2' },
  { name: 'Select-box3', value: 'Select-box3' },
]

export const Default: Story = {
  args: {
    defaultValue: 'Select-box1',
    label: 'Select-box',
    options: defaultOptions,
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: 'Select-box1',
    disabled: true,
    label: 'Select-box',
    options: defaultOptions,
  },
}

export const PaginationVersion: Story = {
  args: {
    defaultValue: '100',
    disabled: false,
    options: paginationOptions,
    pagination: true,
  },
  render: args => (
    <div style={{ width: 50 }}>
      <Select {...args} />
    </div>
  ),
}

const ControlledSelectComponent = () => {
  const [current, setCurrent] = useState<null | string>(null)

  const handleChangeCurrentOption = (value: string) => {
    setCurrent(value)
  }

  return (
    <Select
      label={`Current option value: ${current || 'none'}`}
      onValueChange={handleChangeCurrentOption}
      options={defaultOptions}
      placeholder={'Select controlled value'}
    />
  )
}

export const Controlled: Story = {
  args: { options: defaultOptions },
  render: () => <ControlledSelectComponent />,
}
