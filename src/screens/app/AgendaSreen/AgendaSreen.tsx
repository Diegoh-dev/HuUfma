import React from 'react';
import {Box, Icon, Screen, Text} from '@components';
import {AppTabScreenProps} from 'src/routes/types';
import { $shadowProps } from '@theme';

export function AgendaSreen({
  navigation,
}: AppTabScreenProps<'AgendaSreen'>) {
  return (
    <Screen>
    <Box>
      <Text>Olá, Diego</Text>
      <Text>Agenda</Text>
    </Box>
  </Screen>
  );
}
