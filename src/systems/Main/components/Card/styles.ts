import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid ${({ theme }) => theme.colors.light_gray};
    padding: 1rem;
    width: 80%;
    border-radius: .3rem;
    margin-bottom: .5rem;
    background: white;
    cursor: move;
   filter: drop-shadow(1px 3px 8px #ccc) ; 
   word-break: break-word;
`;

export const IconContainer = styled.div`
    width: 3rem;
    display: flex;
    align-items:center;
    justify-content: space-between;
`
export const TextContainer = styled.div`
   width: 100%;
   cursor: pointer;
`;

export const EditTodo = styled.div`
    width: 100%;
    display: flex;
    textarea {
        width: 100%;
        border: none;
        resize: none;
        outline: none;
        font-size: 1rem;
    }
    svg {
        font-size: 1.2rem;
    }
`