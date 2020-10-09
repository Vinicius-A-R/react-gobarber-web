import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu login</h1>

          <Input
            name="email"
            icon={FiMail}
            type="email"
            placeholder="E-mail"
            autoFocus
          />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">ENTRAR</Button>

          <Link to="forgot">Esqueci minha senha</Link>
        </form>

        <Link to="signup">
          <FiLogIn />
          CRIAR CONTA
        </Link>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
