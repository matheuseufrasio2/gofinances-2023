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
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

export function Dashboard() {
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

        <TransactionCard />
      </Transactions>
    </DashboardContainer>
  );
}