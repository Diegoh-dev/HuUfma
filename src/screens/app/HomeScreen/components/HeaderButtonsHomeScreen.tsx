import {Box, CardButton, Text} from '@components';
import React from 'react';
import {useWindowDimensions} from 'react-native';

export function HeaderButtonsHomeScreen() {
  const {width} = useWindowDimensions();
  const CARD_WIDTH = width / 6;
  return (
    <>
      {/* <Box flexDirection="row" justifyContent="space-between">
     <Text fontWeight='bold' color='teste' mt="s16" mb="s16" preset="headingMedium">Serviços</Text>
     <Text color='teste' mt="s16" mb="s16" preset="headingSmall">Mostrar todos</Text>
     </Box> */}
      {/* <Text
        fontWeight="bold"
        color="primary"
        mt="s10"
        mb="s10"
        preset="headingMedium">
        Serviços
      </Text> */}
      <Box
        // padding="s12"
        mt="s16"
        flexDirection="row"
        justifyContent="space-around"
        gap='s10'
        alignItems="center"
        >
        <CardButton
          content="Histórico"
          nameIcon="historico"
          width={CARD_WIDTH}
        />
        <CardButton content="Exames" nameIcon="science" width={CARD_WIDTH} />
        <CardButton
          content="Agendas"
          nameIcon="agenda"
          width={CARD_WIDTH}
        />

        <CardButton content="Especiali..." nameIcon="doctor" width={CARD_WIDTH} />
      </Box>
    </>
  );
}
