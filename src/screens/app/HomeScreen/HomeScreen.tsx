import React from 'react';
import {Box, Icon, Screen, Text} from '@components';
import {AppScreenProps, AppTabScreenProps} from 'src/routes/types';
import {StatusBar} from 'react-native';
import {useAppTheme} from '@hooks';
import { HeaderHomeScreen } from './components/HeaderHomeScreen';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {colors} = useAppTheme();
  return (
    //to place safeArea for IOS
    <Screen style={{paddingHorizontal: 0, paddingTop: 0}}>
      {/* componentizar a status bar */}
     <HeaderHomeScreen/>
    </Screen>
  );
}
