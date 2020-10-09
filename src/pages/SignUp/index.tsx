import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu Cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" autoFocus />
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

          <Button type="submit">CADASTRAR</Button>
        </form>

        <Link to="/">
          <FiArrowLeft />
          VOLTAR
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
