import React from 'react';
import {Box, Screen, Text} from '@components';
import {AppScreenProps, AppTabScreenProps} from 'src/routes/types';

export function ServicosScreen({navigation}:AppTabScreenProps<'ServicosScreen'>) {
  return (
    <Screen>
      <Box>
        <Text>Olá, Diego</Text>
        <Text>Nossos serviços</Text>
      </Box>
    </Screen>
  );
}
