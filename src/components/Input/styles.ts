import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 16px;

  color: #666360;
  border: 2px solid #232129;
  border-radius: 8px;
  background: #232129;

  & + div{
    margin-top: 8px;
  }

  input{
    flex: 1;

    color: #f4ede8;
    border: 0;
    background: transparent;

    &::placeholder{
      color: #666360;
    }

    & + input{
      margin-top: 8px;
    }
  }

  > svg {
    margin-right: 16px;
  }
`;
