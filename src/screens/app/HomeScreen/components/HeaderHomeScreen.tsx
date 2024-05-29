import {Box, Icon, Text} from '@components';
import {useAppTheme} from '@hooks';
import React from 'react';
import {StatusBar} from 'react-native';

export function HeaderHomeScreen() {
  const {colors} = useAppTheme();
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={colors['primary']}
        showHideTransition={'fade'}
        networkActivityIndicatorVisible={true}
      />
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="primary"
        padding="s14"
        height={100}>
        <Box flexDirection="row" gap="s12" alignItems="center">
          <Box
            backgroundColor="grayWhite"
            width={50}
            height={50}
            borderRadius="s16"></Box>

          <Box>
            <Text preset="paragraphLarge" color="grayWhite" bold>
              Olá, Diego
            </Text>
            <Text preset="paragraphSmall" color="grayWhite" bold>
              Prontuário: 14438232
            </Text>
          </Box>
        </Box>

        <Box marginLeft="s4">
          <Icon name="bellIcon" color="grayWhite" />
        </Box>
      </Box>
    </>
  );
}
