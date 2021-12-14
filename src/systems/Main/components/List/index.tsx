import { FC } from "react";
import { Card } from "../Card";
import { Payload, Todo, } from "../../../../services/todoService";
import { useTodos } from "../../../../context/todoContext";

import * as S from './styles'

export interface Item {
    id: number;
    text: string;
}

export interface ContainerState {
    cards: Item[];
}

type ListProps = {
    name: string
}

export const List: FC<ListProps> = ({ name }) => {
    const { todos, deleteTodo, moveCard, handleEditTodo, value } = useTodos()
    const onCLick = (todoId: string) => {

        handleEditTodo(todoId, { content: value })
    }

    const renderCard = (card: Todo, index: number) => {
        return (
            <Card
                onSave={() => onCLick(card.id)}
                onDelete={() => deleteTodo(card.id)}
                key={card.id}
                index={index}
                id={card.id}
                text={card.content}
                moveCard={moveCard}
            />
        );
    };

    return (
        <>
            <S.Container >
                <S.Title>{name}</S.Title>
                {!todos.length && <p>Inicie sua nova tarefa clicando no botão acima</p>}
                {todos && todos.map((todo, i) => renderCard(todo, i))}
            </S.Container>
        </>
    );

};
