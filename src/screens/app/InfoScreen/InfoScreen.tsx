import React from 'react';
import {Box, Screen, Text} from '@components';
import {AppScreenProps, AppTabScreenProps} from 'src/routes/types';

export function InfoScreen({navigation}: AppTabScreenProps<'infoScreen'>) {
  return (
    <Screen>
      <Box>
        <Text>Olá, Diego</Text>
        <Text>Nossos serviços</Text>
      </Box>
    </Screen>
  );
}
