import { FC } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'

import { CheckedIcon } from '../../icon/checked-icon'
import { UncheckedIcon } from '../../icon/unchecked-icon'
import { Typography } from '../typography/typography.tsx'

import s from './checkbox.module.scss'

type PropsType = {
  checked?: boolean
  label?: string
  disabled?: boolean
  onChange?: (checked: boolean) => void
}

export const Checkbox: FC<PropsType> = ({ checked, onChange, disabled, label }) => {
  return (
    <div className={s.container}>
      <CheckboxRadix.Root checked={checked} disabled={disabled} onCheckedChange={onChange}>
        {checked ? <CheckedIcon /> : <UncheckedIcon />}
      </CheckboxRadix.Root>
      {label && (
        <Typography variant={'body2'} className={disabled ? s.disabledLabel : s.label}>
          {label}
        </Typography>
      )}
    </div>
  )
}
