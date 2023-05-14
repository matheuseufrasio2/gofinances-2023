import React from 'react';

import {
  RegisterContainer,
  Header,
  Title,
  Form
} from './styles';

import { Input } from '../../components/Form/Input';

export function Register() {
  return (
    <RegisterContainer>
      <Header>
        <Title>Cadastro</Title>

      </Header>
      <Form>
        <Input placeholder='Nome' />
        <Input placeholder='Preço' />
      </Form>
    </RegisterContainer>
  );
}