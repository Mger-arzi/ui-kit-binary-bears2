import styles from './textArea.module.scss'
import {type ChangeEvent, type ComponentPropsWithoutRef, forwardRef} from "react";
import clsx from "clsx";

export type TextAreaProps = {
    label: string
    error?: string
    width?: string
    value: string
    onChange?: (value: string) => void
    onBlur?: () => void
} & Omit<ComponentPropsWithoutRef<'textarea'>, 'value' | 'onChange' | 'onBlur'>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {

    const {label, name, maxLength, error, placeholder, disabled, rows, className, width, value, onChange, onBlur} = props

    const currentLength = value.length

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
       onChange?.(e.currentTarget.value)
    }

    const handleBlur = () => {
        onBlur?.()
    }
    const textareaClassName = clsx(
        styles.textareaInput,
        error && styles.textareaError,
        disabled && styles.textareaDisabled,
        className
    )
    return (
        <div className={`${styles.textareaContainer} ${className}`} style={{width}}>
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>

            <div className={styles.textareaWrapper}>
        <textarea
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            maxLength={maxLength}
            className={textareaClassName}
            ref={ref}
        />

                <div className={styles.containerCounterError}>
                    {error && <span className={styles.errorMessage}>{error}</span>}
                    {maxLength && (
                        <span className={styles.counter}>
              {currentLength}/{maxLength}
            </span>
                    )}
                </div>
            </div>
        </div>
    )
})
