import React, { ChangeEvent, ReactNode } from 'react'
import styles from '@/components/input/baseInput/BaseInput.module.scss'
import classNames from 'classnames/bind'

type Props = {
  id: string;
  type: 'text' | 'number' | 'password' | 'email';
  label?: string;
  labelVisible?: boolean;
  placeholder: string;
  readonly?: boolean;
  disabled?: boolean;
  value: string | (number | ''),
  error?: any | null,
  children?: ReactNode,
  classNames?: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

const cn = classNames.bind(styles)

const BaseInput = ({
  id,
  type,
  label = "",
  labelVisible = false,
  placeholder,
  readonly = false,
  disabled = false,
  value,
  error = null,
  classNames = '',
  onChange,
  children
}: Props) => {
  return (
    <div className={cn('container')}>
      <label htmlFor={id} className={cn('label')}>{label}</label>
      <input type={type} placeholder={placeholder} className={cn('input')} disabled={disabled} readOnly={readonly} onChange={onChange} value={value} />
      {children && <div className={cn('icon')}>{children}</div>}
    </div>
  )
}

export default BaseInput
