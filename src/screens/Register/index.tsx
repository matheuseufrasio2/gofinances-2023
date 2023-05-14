import React from 'react';

import {
  RegisterContainer,
  Header,
  Title,
  Form,
  Fields,
} from './styles';

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

export function Register() {
  return (
    <RegisterContainer>
      <Header>
        <Title>Cadastro</Title>

      </Header>
      <Form>
        <Fields>
          <Input placeholder='Nome' />
          <Input placeholder='Preço' />
        </Fields>
        
        <Button title='Enviar' />
      </Form>
    </RegisterContainer>
  );
}