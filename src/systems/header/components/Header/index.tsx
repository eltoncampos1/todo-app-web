import { Button } from '..'
import { FiPlus } from 'react-icons/fi'
import { PageTitle, TextEditor } from '../../../core/components'
import * as S from './styles'
import { FormEvent, useState } from 'react'

import { useTodos } from '../../../../context/todoContext'



export const Header = () => {
    const { handleSubmit, value, getValue } = useTodos()
    const [isVisible, setIsVisible] = useState(true)


    const onSubmit = (e: FormEvent) => {
        handleSubmit(e)
        setIsVisible(true)
    }

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
                        <TextEditor
                            onSubmit={(e) => onSubmit(e)}
                            value={value}
                            onChange={(e) => getValue(e.target.value)}
                        />
                    </>
                )}

            </S.Container>
        </S.Main>
    )
}