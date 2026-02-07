import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div style={{ width: '200px', height: '120px' }}>
      <Card />
    </div>
  ),
}

export const WithContent: Story = {
  render: () => (
    <Card>
      <p style={{ margin: 0, padding: '16px', color: 'white' }}>
        Card content
      </p>
    </Card>
  ),
}

export const FlexibleSize: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Card style={{ width: '150px', height: '100px' }} />
      <Card style={{ width: '200px', height: '150px' }} />
    </div>
  ),
}