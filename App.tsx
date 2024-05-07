import React from 'react';
import {LoginScreen, SignUpScreen} from '@screens';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
    <ThemeProvider theme={theme}>
      {/* <LoginScreen /> */}
      <SignUpScreen />
    </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
