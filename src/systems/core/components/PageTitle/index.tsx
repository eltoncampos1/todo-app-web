import { ReactNode } from 'react'
import * as S from './styles'

type PageTiTleProps = {
  children: ReactNode
}

export const PageTitle = ({ children }: PageTiTleProps) => {
  return (
    <S.PageTiTle>{children}</S.PageTiTle>
  )
}