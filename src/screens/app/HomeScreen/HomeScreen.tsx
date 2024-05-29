import React from 'react';
import {Box, CardButton, Icon, Screen, Text} from '@components';
import {AppScreenProps, AppTabScreenProps} from 'src/routes/types';
import {StatusBar, useWindowDimensions} from 'react-native';
import {useAppTheme} from '@hooks';
import {HeaderHomeScreen} from './components/HeaderHomeScreen';
import {$shadowProps} from '@theme';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {colors} = useAppTheme();
  const {height, width} = useWindowDimensions();
  const CARD_WIDTH = width / 3.5;

  return (
    //to place safeArea for IOS
    <Screen style={{paddingHorizontal: 0, paddingTop: 0}}>
      {/* componentizar a status bar */}
      <HeaderHomeScreen />

      {/* componentizar */}
      <Box
        padding="s12"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mt="s8">
        {/* <Box
          width={CARD_WIDTH}
          height={75}
          style={$shadowProps}
          backgroundColor="gray5"
          borderRadius="s8"
          alignItems="center"
          justifyContent="center">
          <Icon name="bellIcon" color="primary" />
          <Text preset="paragraphSmall">Paciente</Text>
        </Box> */}
        <CardButton content='Paciente' nameIcon='home' width={CARD_WIDTH}/>
        <CardButton content='Paciente' nameIcon='profile' width={CARD_WIDTH}/>
        <CardButton content='Paciente' nameIcon='arrowLeft' width={CARD_WIDTH}/>
      </Box>

      <Box padding="s12" borderRadius="s16">
        <Box flexDirection="row" borderRadius="s16" style={$shadowProps}>
          <Box
            flex={1}
            borderTopLeftRadius='s16'
            borderBottomLeftRadius='s16'
            backgroundColor="purpleSecondary"
            justifyContent="center"
            alignItems="center">
            <Icon name="home" size={30} color="grayWhite" />
          </Box>
          <Box flex={2} padding="s10" backgroundColor="gray5"      borderTopRightRadius='s16'
            borderBottomRightRadius='s16'>
            <Text preset="headingSmall" bold color='gray2'>Campanha de vacinas</Text>
            <Text preset="paragraphSmall">
              vacinas vacinas vacinas vacinas vacinas vacinas vacinas vacinas
              vacinas vacinas vacinas vacinas
            </Text>
          </Box>
        </Box>
      </Box>
    </Screen>
  );
}
