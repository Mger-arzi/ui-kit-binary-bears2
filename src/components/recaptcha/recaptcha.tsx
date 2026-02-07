import { forwardRef } from 'react'
import ReCAPTCHA, { type ReCAPTCHAProps } from 'react-google-recaptcha'

import clsx from 'clsx'

import s from './recaptcha.module.scss'

type Props = ReCAPTCHAProps & {
  error?: string
}

export const Recaptcha = forwardRef<InstanceType<typeof ReCAPTCHA>, Props>((props, ref) => {
  const { className, error, theme = 'dark', ...rest } = props
  const classNames = clsx(s.recaptcha, className)

  return (
    <div className={clsx(error && s.errorBox)}>
      <ReCAPTCHA className={classNames} ref={ref} theme={theme} {...rest} />
      {error && <span className={s.error}>{error}</span>}
    </div>
  )
})
