import React from 'react';

import {
  DashboardContainer,
  Header,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
} from './styles';

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
        </UserWrapper>
      </Header>
    </DashboardContainer>
  );
}