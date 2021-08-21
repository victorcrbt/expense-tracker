import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { ThemeProvider } from 'styled-components';

// Misc
import { defaultTheme } from '@styles/themes/default';

// Shared Components
import { AppContainer } from '@components/AppContainer';
import { HelloWorld } from '@components/HelloWorld';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <AppContainer>
      <HelloWorld />
    </AppContainer>

    <StatusBar
      translucent
      backgroundColor="transparent"
      barStyle={Platform.OS === 'ios' ? 'light-content' : 'default'}
    />
  </ThemeProvider>
);

export default App;
