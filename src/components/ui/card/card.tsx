import { ComponentProps, FC, ReactNode } from 'react'

import s from './card.module.scss'

type PropsType = {
  children: ReactNode
} & ComponentProps<'div'>

export const Card: FC<PropsType> = ({ children, ...rest }) => {
  return (
    <div className={s.box} {...rest}>
      {children}
    </div>
  )
}
