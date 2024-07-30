import React from 'react';
import {Box, HeaderApp, Icon, Screen, Text, TextInput} from '@components';
import {AppTabScreenProps} from 'src/routes/types';
import {$shadowProps} from '@theme';

export function AgendaSreen({navigation}: AppTabScreenProps<'AgendaSreen'>) {
  return (
    <Screen>
      <Box>
        <HeaderApp title='Médicos' placeholder='Buscar especialidade'/>
      </Box>
    </Screen>
  );
}
