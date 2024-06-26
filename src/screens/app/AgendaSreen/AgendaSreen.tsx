import React from 'react';
import {Box, Icon, Screen, Text, TextInput} from '@components';
import {AppTabScreenProps} from 'src/routes/types';
import { $shadowProps } from '@theme';

export function AgendaSreen({
  navigation,
}: AppTabScreenProps<'AgendaSreen'>) {
  return (
    <Screen>
    <Box>
      <Text>Agenda</Text>

      <TextInput
          autoCapitalize="words"
          placeholder="Nome"
          boxProps={{mb: 's20'}}
        />
      <TextInput
          autoCapitalize="words"
          placeholder="Nome"
          boxProps={{mb: 's20'}}
        />
      <TextInput
          autoCapitalize="words"
          placeholder="Tipo Agendamento"
          boxProps={{mb: 's20'}}
        />
      <TextInput
          autoCapitalize="words"
          placeholder="Nome"
          boxProps={{mb: 's20'}}
        />
    </Box>
  </Screen>
  );
}
