import { clsx } from 'clsx'
import { type ComponentPropsWithoutRef, type ElementType } from 'react'
import s from './Card.module.scss'

type CardProps<T extends ElementType = 'div'> = {
  as?: T
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>({
  as,
  className,
  ...rest
}: CardProps<T>) => {
  const Component = as ?? 'div'

  return <Component className={clsx(s.root, className)} {...rest} />
}