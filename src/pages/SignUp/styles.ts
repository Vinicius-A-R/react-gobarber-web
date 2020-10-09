import styled from 'styled-components';
import { shade } from 'polished'

import signUpBackgroundImg from '../../assets/sign-up-background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
place-content: center;

width: 100%;
max-width: 700px;

form{
  width: 340px;
  margin: 80px 0;
  text-align: center;

  h1{
    margin-bottom: 24px;
  }

  a{
    display: block;

    color: #f4ede8;
    margin-top: 24px;
    transition: color 0.2s;

    &:hover{
      color: ${shade(0.2, '#f4ede8')};
    }
  }
}

  > a {
    display: flex;
    align-items: center;

    color: #ff9000;
    margin-top: 24px;
    transition: color 0.2s;

    svg{
      margin-right: 8px;
    }

    &:hover{
      color: ${shade(0.2, '#FF9000')};
    }
  }
`;

export const Background = styled.div`
flex: 1;
background: url(${signUpBackgroundImg}) no-repeat center;
background-size: cover;
`
