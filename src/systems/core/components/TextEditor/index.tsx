import { FormEvent } from 'react'
import * as S from './styles'

type TextEditorProps = {
    onSubmit: (e: FormEvent) => void;
    onChange: (e: any) => void;
    value: string;
}

export const TextEditor = ({ onSubmit, onChange, value }: TextEditorProps) => {
    return (
        <S.Container onSubmit={onSubmit}>
            <textarea value={value} onChange={onChange} maxLength={50} placeholder='Insira seu conteúdo' name="todo" id="todo" />
            <button type="submit">criar</button>
        </S.Container>
    )
}