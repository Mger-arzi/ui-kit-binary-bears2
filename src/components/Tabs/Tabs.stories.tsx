import type { Meta, StoryObj } from '@storybook/react'
import Tabs, { type TabItem } from './Tabs'

const sampleTabs: TabItem[] = [
  { id: 'tab1', label: 'Tab 1', content: 'Content for Tab 1', variantStyle: 'primary' },
  { id: 'tab2', label: 'Tab 2', content: 'Content for Tab 2', variantStyle: 'primary' },
  { id: 'tab3', label: 'Tab 3', content: 'Content for Tab 3', variantStyle: 'secondary' },
]

const disabledTabs: TabItem[] = [
  { id: 'tab1', label: 'Tab 1', content: 'Content for Tab 1', variantStyle: 'primary', disabled: true },
  { id: 'tab2', label: 'Tab 2', content: 'Content for Tab 2', variantStyle: 'primary' },
  { id: 'tab3', label: 'Tab 3', content: 'Content for Tab 3', variantStyle: 'secondary', disabled: true },
]

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    tabs: { control: false },
    defaultActiveId: { control: false },
  },
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>


export const Default: Story = {
  args: {
    tabs: sampleTabs,
  },
}

export const Active: Story = {
  args: {
    tabs: sampleTabs,
    defaultActiveId: 'tab2',
  },
}



export const Disabled: Story = {
  args: {
    tabs: disabledTabs,
  },
}