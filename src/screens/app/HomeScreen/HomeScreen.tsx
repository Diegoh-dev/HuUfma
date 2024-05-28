import React from 'react';
import {Box, Icon, Screen, Text} from '@components';
import {AppScreenProps, AppTabScreenProps} from 'src/routes/types';
import {StatusBar} from 'react-native';
import {useAppTheme} from '@hooks';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {colors} = useAppTheme();
  return (
    //to place safeArea for IOS
    <Screen style={{paddingHorizontal: 0, paddingTop: 0}}>
      {/* componentizar a status bar */}
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
            <Text preset="paragraphSmall" color="grayWhite" bold>
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
    </Screen>
  );
}
