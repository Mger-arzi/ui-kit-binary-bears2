import type { Meta, StoryObj } from '@storybook/react'
import { ScrollAreaBase } from './Scroll'

const meta: Meta<typeof ScrollAreaBase> = {
  title: 'Components/ScrollArea',
  component: ScrollAreaBase,
  parameters: {
    layout: 'centered',
  },
}
export default meta

type Story = StoryObj<typeof ScrollAreaBase>


export const Vertical: Story = {
  render: () => (
    <div style={{ width: 120, height: 200, border: '1px solid #ccc' }}>
      <ScrollAreaBase type="always">
        <div style={{ height: 300, padding: '10px' }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} style={{ 
              padding: '8px', 
              marginBottom: '4px',
              border: '1px solid #ddd'
            }}>
              Item {i + 1}
            </div>
          ))}
        </div>
      </ScrollAreaBase>
    </div>
  ),
}


export const Horizontal: Story = {
  render: () => (
    <div style={{ width: 200, height: 60, border: '1px solid #ccc' }}>
      <ScrollAreaBase type="always">
        <div style={{ width: 400, whiteSpace: 'nowrap', padding: '10px' }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} style={{ 
              display: 'inline-block',
              marginRight: '12px',
              padding: '6px 10px',
              border: '1px solid #ddd'
            }}>
              Item {i + 1}
            </span>
          ))}
        </div>
      </ScrollAreaBase>
    </div>
  ),
}