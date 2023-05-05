import React, { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import { Dashboard } from './src/screens/Dashboard';
import { View } from 'react-native';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_700Bold
        });
      }
      catch {
        // handle error
      }
      finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  const onLayout = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1, width: '100%' }} onLayout={onLayout}>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </View>
  );
}
