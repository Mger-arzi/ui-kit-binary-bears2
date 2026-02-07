import * as TabsPrimitive from '@radix-ui/react-tabs'
import { type ComponentPropsWithoutRef, type ReactNode } from 'react'
import s from './Tabs.module.scss'

export type TabItem = {
  id: string
  label: ReactNode
  content: ReactNode
  disabled?: boolean
  variantStyle?: 'primary' | 'secondary'
}

type TabsProps = {
  tabs: TabItem[]
  defaultActiveId?: string | null
} & ComponentPropsWithoutRef<typeof TabsPrimitive.Root>

export default function Tabs({
  tabs,
  defaultActiveId = null,
  ...rest
}: TabsProps) {
  return (
    <TabsPrimitive.Root 
      defaultValue={defaultActiveId ?? undefined} 
      className={s.tabs}
      {...rest}
    >
      <TabsPrimitive.List className={s.tabsHeader}>
        {tabs.map(tab => (
          <TabsPrimitive.Trigger
            key={tab.id}
            value={tab.id}
            disabled={tab.disabled}
            className={`${s.tabButton} ${s[tab.variantStyle ?? 'primary']}`}
          >
            <span className={s.label}>{tab.label}</span>
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>

      {tabs.map(tab => (
        <TabsPrimitive.Content
          key={tab.id}
          value={tab.id}
          className={s.content}
        >
          {tab.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  )
}
