import React from 'react';
import { Dashboard } from './src/screens/Dashboard';
import { DashboardContainer } from './src/screens/Dashboard/styles';

export default function App() {
  return (
    <DashboardContainer>
      <Dashboard
        title="App configurado Bare Workflow Typescript"
      />
    </DashboardContainer>
  );
}
