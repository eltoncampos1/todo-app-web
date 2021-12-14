import styled from 'styled-components';

type Props = {
    maxWidth: string | number;
}

export const Container = styled.form<Props>`
  max-width: ${(props) => props.maxWidth};
  width: 100%;
  height: 5rem;

  textarea {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      padding: .5rem;
      font-size: .9rem;
      border-radius: .8rem;
      word-break: break-word;
      resize: none;
  }

  button {
      width: 5rem;
      padding: .3rem .5rem;
      border-radius: .5rem;
      background: #4BB543;
      border: none;
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
      transition: .4s ease;

      &:hover {
          filter: brightness(.7);
      }
    }
`;
