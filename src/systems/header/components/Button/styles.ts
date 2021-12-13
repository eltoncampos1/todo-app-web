import styled from 'styled-components';

export const Button = styled.button`
  width: 15rem;
  padding: 1rem;

  border-radius: 1rem;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.button};
  transition:  all .4s ease;
  box-shadow: 1px 5px 6px -1px rgba(0,0,0,0.45);
  -webkit-box-shadow: 1px 5px 6px -1px rgba(0,0,0,0.45);
  -moz-box-shadow: 1px 5px 6px -1px rgba(0,0,0,0.45);
  cursor: pointer;
    
  &:hover {
    filter: brightness(.7);
  }

  svg {
      margin-left: .5rem;
  }
`;
