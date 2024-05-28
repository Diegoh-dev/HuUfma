import React from 'react';
import {Box, Screen, Text} from '@components';
import {AppScreenProps} from 'src/routes/types';

export function HomeScreen({navigation}: AppScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Box>
        <Text>Olá, Diego</Text>
        <Text>Prontuário: 14438232</Text>
      </Box>
    </Screen>
  );
}
