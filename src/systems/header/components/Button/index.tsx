import { ReactNode } from "react"
import * as S from './styles'

type ButtonProps = {
    children: ReactNode;
    description: string;
    onClick: () => void;
}

export const Button = ({ children, onClick, description }: ButtonProps) => {
    return <S.Button aria-details={description} type="button" onClick={onClick}>{children}</S.Button>
}