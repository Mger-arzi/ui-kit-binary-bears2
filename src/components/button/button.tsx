import  { type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

import s from './button.module.scss'

type ButtonOwnProps = {
  asChild?: boolean
  children: ReactNode
  className?: string
  fullWidth?: boolean
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'outline' | 'textButton' | 'asLink'
  // size?: 'sm' | 'md' 
}

export type ButtonProps = ButtonOwnProps &
  ComponentPropsWithoutRef<'button'>

export const Button = ({
  asChild = false,
  className,
  fullWidth,
  variant = 'primary',
  // size = 'md', 
  //disabled,
  ...rest
}: ButtonProps) => {
  const Component = asChild ? Slot : 'button'

  const classes = clsx(
    s.button,
    s[variant],
    // s[size], 
    fullWidth && s.fullWidth,
    className
  )

  // const tabIndex = disabled && asChild ? -1 : rest.tabIndex

  return (
    <Component
      className={classes}
      {...rest}
      // disabled={!asChild ? disabled : undefined}
      // aria-disabled={disabled}
      // tabIndex={tabIndex}
    />
  )
}