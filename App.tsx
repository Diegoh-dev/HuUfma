import React from 'react';
import {LoginScreen, SignUpScreen} from '@screens';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Router } from '@routes';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
    <ThemeProvider theme={theme}>
      {/* <LoginScreen /> */}
      <Router/>
    </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
