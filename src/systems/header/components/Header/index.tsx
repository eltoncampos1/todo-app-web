import { Button } from '..'
import { FiPlus } from 'react-icons/fi'
import { PageTitle, TextEditor } from '../../../core/components'
import * as S from './styles'
import { useState } from 'react'

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true)

    const handleCLick = () => {
        setIsVisible(false)
    }

    return (
        <S.Main>
            <S.Container>
                <PageTitle>Todo App</PageTitle>
                {isVisible ? (
                    <Button
                        description='Criar novo item'
                        onClick={handleCLick}
                    >
                        Criar item
                        <FiPlus />
                    </Button>
                ) : (
                    <>
                        <TextEditor />

                    </>
                )}

            </S.Container>
        </S.Main>
    )
}