import { Button } from '..'
import { FiPlus } from 'react-icons/fi'
import { PageTitle, TextEditor } from '../../../core/components'
import * as S from './styles'
import { FormEvent, useState } from 'react'
import { TodoService } from '../../../../services/todoService'

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [value, setValue] = useState('')

    const handleCLick = () => {
        setIsVisible(false)
    }

    const handleSubmit = async (e: any) => {
        await TodoService.createTodo({ content: e.target.value, isComplete: false })
        setIsVisible(true)
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
                            onSubmit={(e) => handleSubmit(e)}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </>
                )}

            </S.Container>
        </S.Main>
    )
}