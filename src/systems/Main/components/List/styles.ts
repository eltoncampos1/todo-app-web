import styled from 'styled-components';

export const Container = styled.div`
  width: 50rem;
  background: ${({ theme }) => theme.colors.light_gray};
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.medium_gray};
    margin-bottom: 2rem;
`
