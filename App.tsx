import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard title="App configurado Bare Workflow Typescript" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b43232',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
