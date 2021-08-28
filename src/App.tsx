import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

// Misc
import { defaultTheme } from '@styles/themes/default';

// Shared Components
import { AppContainer } from '@components/AppContainer';
import { Router } from './routes';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <AppContainer>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </AppContainer>

    <StatusBar
      translucent
      backgroundColor="transparent"
      barStyle={Platform.OS === 'ios' ? 'light-content' : 'default'}
    />
  </ThemeProvider>
);

export default App;
