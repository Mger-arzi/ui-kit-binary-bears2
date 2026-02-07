import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { useGenerateId } from '../../hooks/useGenerateId'
import clsx from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  labelText?: ReactNode
} & ComponentPropsWithoutRef<'input'>
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { className, id, labelText, name, ...restProps } = props

  const inputId = useGenerateId(name, id)
  return (
    <label className={clsx(s.checkbox, className)} htmlFor={inputId}>
      <input
        className={s.input}
        id={inputId}
        name={name}
        ref={ref}
        type={'checkbox'}
        {...restProps}
      />
      <span className={s.icon}></span>
      {labelText}
    </label>
  )
})
