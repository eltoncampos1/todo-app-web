import { FC, useState, useCallback, useEffect } from "react";
import * as S from './styles'
import { Card } from "../Card";
import { api } from "../../../../services/api";
import { Response, Todo, TodoService } from "../../../../services/todoService";
import { useTodos } from "../../../../context/todoContext";


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
    const { todos, deleteTodo, moveCard } = useTodos()

    const renderCard = (card: Todo, index: number) => {
        return (
            <Card
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
