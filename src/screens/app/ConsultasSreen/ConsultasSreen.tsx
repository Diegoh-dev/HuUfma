import React from 'react';
import {Box, Screen, Text} from '@components';
import {AppScreenProps} from 'src/routes/types';

export function ConsultasSreen({navigation}: AppScreenProps<'ConsultasSreen'>) {
  return (
    <Screen>
      <Box>
        <Text>medical </Text>
        <Text>appointment</Text>
      </Box>
    </Screen>
  );
}
