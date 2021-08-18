import React from 'react';
import { StatusBar } from 'react-native';
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

    <StatusBar translucent backgroundColor="transparent" />
  </ThemeProvider>
);

export default App;
