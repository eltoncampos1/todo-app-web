import { ReactNode } from "react"
import * as S from './styles'
type LayoutProps = {
    children: ReactNode
    title: string
}

export const Layout = ({ children, title }: LayoutProps) => {
    return (
        <>
            <title>{title}</title>
            <S.Main>
                {children}
            </S.Main>
        </>
    )
}