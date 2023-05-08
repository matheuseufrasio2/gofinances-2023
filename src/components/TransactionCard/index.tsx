import React from 'react';

import {
  TransactionCardContainer,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from './styles';

interface Category {
  name: string;
  icon: string;
}

interface TransactionCardProps {
  title: string;
  amount: string;
  category: Category
}

export function TransactionCard({}: TransactionCardProps) {
  return (
    <TransactionCardContainer>
      <Title>Desenvolvimento de site</Title>
      <Amount>R$ 12.000,00</Amount>

      <Footer>
        <Category>
          <Icon name='dollar-sign'/>
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Date>13/04/2023</Date>
      </Footer>
    </TransactionCardContainer>
  );
}