import React from 'react';
import {Box, Screen, Text} from '@components';
import {AppScreenProps, AppTabScreenProps} from 'src/routes/types';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Box>
        <Text>Olá, Diego</Text>
        <Text>Prontuário: 14438232</Text>
      </Box>
    </Screen>
  );
}
