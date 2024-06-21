import React from 'react';
import {Box, CardButton, Icon, Screen, Text} from '@components';
import {AppScreenProps, AppTabScreenProps} from 'src/routes/types';
import {StatusBar, useWindowDimensions} from 'react-native';
import {useAppTheme} from '@hooks';
import {HeaderHomeScreen} from './components/HeaderHomeScreen';
import {$shadowProps} from '@theme';
import {HeaderButtonsHomeScreen} from './components/HeaderButtonsHomeScreen';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {colors} = useAppTheme();

  return (
    //to place safeArea for IOS
    <Screen style={{paddingHorizontal: 0, paddingTop: 0}}>
      {/* componentizar a status bar */}
      <HeaderHomeScreen />

        <HeaderButtonsHomeScreen />

      {/* componentizar */}
      <Box padding="s12" borderRadius="s16">
        <Box flexDirection="row" borderRadius="s16" style={$shadowProps}>
          <Box
            flex={1}
            borderTopLeftRadius="s16"
            borderBottomLeftRadius="s16"
            backgroundColor="purpleSecondary"
            justifyContent="center"
            alignItems="center">
            <Icon name="home" size={30} color="grayWhite" />
          </Box>
          <Box
            flex={2}
            padding="s10"
            backgroundColor="gray5"
            borderTopRightRadius="s16"
            borderBottomRightRadius="s16">
            <Text preset="headingSmall" bold color="gray2">
              Campanha de vacinas
            </Text>
            <Text preset="paragraphSmall">
              vacinas vacinas vacinas vacinas vacinas vacinas vacinas vacinas
              vacinas vacinas vacinas vacinas
            </Text>
          </Box>
        </Box>
      </Box>

      <Box backgroundColor="grayWhite" padding="s12">
        <Box flexDirection="row" gap="s8" alignItems="center">
          <Box
            backgroundColor="gray4"
            width={50}
            height={50}
            borderRadius="s16"></Box>

          <Box>
            <Text preset="paragraphSmall" color="purpleSecondary">
              Hu-ufma
            </Text>
            <Text preset="paragraphCaptionSmall" color="purpleSecondary">
              Noticias
            </Text>
          </Box>
        </Box>

        <Box
          backgroundColor="gray3"
          alignSelf="stretch"
          height={250}
          mt="s8"
          borderRadius="s16"></Box>
      </Box>
    </Screen>
  );
}
