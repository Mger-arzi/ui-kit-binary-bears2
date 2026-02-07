import * as ScrollArea from '@radix-ui/react-scroll-area'
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import clsx from 'clsx'
import s from './scroll.module.scss'

type ScrollAreaBaseProps = ComponentPropsWithoutRef<typeof ScrollArea.Root> & {
  children: ReactNode
}

export const ScrollAreaBase = forwardRef<HTMLDivElement, ScrollAreaBaseProps>(
  ({ children, className, type = 'hover', ...props }, ref) => {
    return (
      <ScrollArea.Root
        ref={ref}
        type={type}
        className={clsx(s.root, className)}
        {...props}
      >
        <ScrollArea.Viewport className={s.viewport}>
          {children}
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar orientation="vertical" className={s.scrollbar}>
          <ScrollArea.Thumb className={s.thumb} />
        </ScrollArea.Scrollbar>

        <ScrollArea.Scrollbar orientation="horizontal" className={s.scrollbar}>
          <ScrollArea.Thumb className={s.thumb} />
        </ScrollArea.Scrollbar>

        <ScrollArea.Corner className={s.corner} />
      </ScrollArea.Root>
    )
  }
)

// Backward compatibility export
export const Scrollbar = ScrollAreaBase
export type { ScrollAreaBaseProps as ScrollbarProps }