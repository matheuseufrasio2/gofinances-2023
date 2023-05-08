import React from 'react';

import {
  DashboardContainer,
  Header,
  Icon,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() { 
  const transactionsHistory: DataListProps[] = [
    {
      id: '1',
      amount: 'R$ 17.600,00',
      category: { icon: 'dollar-sign', name: 'Vendas' },
      date: '13/04/2022',
      title: 'Venda notebook',
      type: 'positive'
    },
    {
      id: '2',
      amount: 'R$ 5.999,90',
      category: { icon: 'dollar-sign', name: 'Compra Setup' },
      date: '13/04/2022',
      title: 'Compra macbook',
      type: 'negative'
    },
    {
      id: '3',
      amount: 'R$ 59,90',
      category: { icon: 'dollar-sign', name: 'Hamburguer Pizzy' },
      date: '13/04/2022',
      title: 'Compra de hamburguer',
      type: 'negative'
    },
    {
      id: '4',
      amount: 'R$ 17.600,00',
      category: { icon: 'dollar-sign', name: 'Vendas' },
      date: '13/04/2022',
      title: 'Venda notebook',
      type: 'positive'
    },
  ];

  return (
    <DashboardContainer>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://github.com/matheuseufrasio2.png' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Matheus</UserName>
            </User>
          </UserInfo>
          <Icon name='power' />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction='Última entrada 13 de abril'
          type='up'
        />

        <HighlightCard
          title="Saídas"
          amount="R$ 1.278,33"
          lastTransaction='Última saida 03 de abril'
          type='down'
        />

        <HighlightCard
          title="Total"
          amount="R$ 15.400,00"
          lastTransaction='08 à 13 de abril'
          type='total'
        />

      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList 
          data={transactionsHistory}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard data={item} />}
        />
      </Transactions>
    </DashboardContainer>
  );
}