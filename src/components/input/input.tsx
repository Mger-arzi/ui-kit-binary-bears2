import s from './input.module.scss'
import { type ComponentPropsWithoutRef, forwardRef, type MouseEvent, useState } from 'react'
import { IconEye, IconEyeOff, IconSearch } from '../../assets/icons/components'
import clsx from 'clsx'

type Props = {
  error?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, disabled, error, id, label, type, ...rest } = props
  const isPasswordType = type === 'password'
  const isSearchType = type === 'search'

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowPassword(prev => !prev)
  }

  return (
    <div className={clsx(s.root, disabled && s.disabled)}>
      {label && (
        <label htmlFor={id} className={clsx(s.label)}>
          {label}
        </label>
      )}
      <div className={s.inputWrapper}>
        <input
          id={id}
          className={clsx(s.input, error && s.error, isPasswordType && s.withEyeIcon, className)}
          disabled={disabled}
          ref={ref}
          type={isPasswordType && showPassword ? 'text' : type}
          {...rest}
        />
        {isSearchType && <IconSearch className={s.searchIcon} />}
        {isPasswordType && (
          <button className={s.eyeButton} type={'button'} onClick={togglePasswordVisibility}>
            {showPassword ? <IconEye /> : <IconEyeOff />}
          </button>
        )}
      </div>
      {error && <span className={s.errorMessage}>{error}</span>}
    </div>
  )
})
