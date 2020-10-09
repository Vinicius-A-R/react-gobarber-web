import styled from 'styled-components';
import {shade} from 'polished'

export const Container = styled.button`
   width: 100%;
    height: 56px;
    padding: 0 16px;
    margin-top: 16px;

    color: #312e38;
    font-weight: 500;
    border-radius: 8px;
    background-color: #FF9000;

    transition: all 0.2s;

    &:hover{
      color: #fff;
      background: ${shade(0.2, '#FF9000')};
    }
`;
