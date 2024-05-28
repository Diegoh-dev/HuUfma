import React from 'react';
import {Box, Screen, Text} from '@components';
import {AppScreenProps, AppTabScreenProps} from 'src/routes/types';

export function ConsultasSreen({navigation}: AppTabScreenProps<'ConsultasSreen'>) {
  return (
    <Screen>
      <Box>
        <Text>medical </Text>
        <Text>appointment</Text>
      </Box>
    </Screen>
  );
}
