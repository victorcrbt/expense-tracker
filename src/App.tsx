import React from 'react';
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
  </ThemeProvider>
);

export default App;
