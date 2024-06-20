import React from 'react';
import {Box, Icon, Screen, Text} from '@components';
import {AppScreenProps, AppTabScreenProps} from 'src/routes/types';
import {$shadowProps} from '@theme';

export function ServicosScreen({
  navigation,
}: AppTabScreenProps<'ServicosScreen'>) {
  return (
    <Screen>
      <Text>Gerenciar meus serviços</Text>
      <Box mt="s24">
        <Box borderRadius="s16" mt="s12">
          <Box flexDirection="row" borderRadius="s16" style={$shadowProps}>
            <Box
              width={7}
              borderTopLeftRadius="s8"
              borderBottomLeftRadius="s8"
              height={'auto'}
              backgroundColor="primary"></Box>
            <Box
              flex={2}
              alignItems="center"
              flexDirection="row"
              backgroundColor="gray5"
              borderTopRightRadius="s8"
              borderBottomRightRadius="s8"
              padding="s20"
              gap="s10">
              <Box backgroundColor="primary" padding="s8" borderRadius="s8">
                <Icon name="homeFill" color="grayWhite" size={25} />
              </Box>
              <Text preset="headingMedium" bold>
                Consulta
              </Text>
            </Box>
          </Box>
        </Box>

        <Box borderRadius="s16" mt="s12">
          <Box flexDirection="row" borderRadius="s16" style={$shadowProps}>
            <Box
              width={7}
              borderTopLeftRadius="s8"
              borderBottomLeftRadius="s8"
              height={'auto'}
              backgroundColor="primary"></Box>
            <Box
              flex={2}
              alignItems="center"
              flexDirection="row"
              backgroundColor="gray5"
              borderTopRightRadius="s8"
              borderBottomRightRadius="s8"
              padding="s20"
              gap="s10">
              <Box backgroundColor="primary" padding="s8" borderRadius="s8">
                <Icon name="homeFill" color="grayWhite" size={25} />
              </Box>
              <Text preset="headingMedium" bold>
                Exame
              </Text>
            </Box>
          </Box>
        </Box>

        <Box borderRadius="s16" mt="s12">
          <Box flexDirection="row" borderRadius="s16" style={$shadowProps}>
            <Box
              width={7}
              borderTopLeftRadius="s8"
              borderBottomLeftRadius="s8"
              height={'auto'}
              backgroundColor="primary"></Box>
            <Box
              flex={2}
              alignItems="center"
              flexDirection="row"
              backgroundColor="gray5"
              borderTopRightRadius="s8"
              borderBottomRightRadius="s8"
              padding="s20"
              gap="s10">
              <Box backgroundColor="primary" padding="s8" borderRadius="s8">
                <Icon name="homeFill" color="grayWhite" size={25} />
              </Box>
              <Text preset="headingMedium" bold>
                Outros
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Screen>
  );
}
