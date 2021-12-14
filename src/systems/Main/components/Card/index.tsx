import { FC, useRef } from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd'
import * as S from './styles'
import { XYCoord } from 'dnd-core'



export interface CardProps {
    id: any
    text: string
    index: number
    moveCard: (dragIndex: number, hoverIndex: number) => void;
    onDelete?: () => void;
}

interface DragItem {
    index: number
    id: string
    type: string
}

export const Card: FC<CardProps> = ({ id, text, index, moveCard, onDelete }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [{ handlerId }, drop] = useDrop({
        accept: 'CARD',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: DragItem, monitor: DropTargetMonitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect()

            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            const clientOffset = monitor.getClientOffset()

            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            moveCard(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: 'CARD',
        item: () => {
            return { id, index }
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1
    drag(drop(ref))
    return (
        <S.Container ref={ref} style={{ opacity }} data-handler-id={handlerId}>
            <S.TextContainer>
                <p>  {text}</p>
            </S.TextContainer>
            <S.IconContainer>
                <FiEdit fontSize={18} cursor="pointer" /> <FiTrash2 onClick={onDelete} color='#cc0000' fontSize={18} cursor="pointer" />
            </S.IconContainer>
        </S.Container>
    )
}
