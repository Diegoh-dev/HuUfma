import React from 'react';
import {LoginScreen} from '@screens';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from '@theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <LoginScreen />
    </ThemeProvider>
  );
}

export default App;
