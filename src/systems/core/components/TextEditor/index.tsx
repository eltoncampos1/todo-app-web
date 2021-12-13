import * as S from './styles'

export const TextEditor = () => {
    return (
        <S.Container>
            <textarea maxLength={50} placeholder='Insira seu conteúdo' name="todo" id="todo" />
            <button type="submit">criar</button>
        </S.Container>
    )
}