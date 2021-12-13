import { FC, useState, useCallback, useEffect } from "react";
import * as S from './styles'
import update from "immutability-helper";
import { Card } from "../Card";
import { api } from "../../../../services/api";


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
    const [cards, setCards] = useState([]);

    useEffect(() => {
        (async () => {

            const todos = await api.get('/list')
            setCards(todos.data)
        })()

    }, [])

    const moveCard = useCallback(
        (dragIndex: number, hoverIndex: number) => {
            const dragCard = cards[dragIndex];
            setCards(
                update(cards, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragCard]
                    ]
                })
            );
        },
        [cards]
    );

    const renderCard = (card: { id: number; content: string }, index: number) => {
        return (
            <Card
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
                {cards && cards.map((card, i) => renderCard(card, i))}
            </S.Container>
        </>
    );

};
