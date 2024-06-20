import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { AppTabBottomTabParamlist, AppTabNavigation } from './AppTabNavigation';
import { NavigatorScreenParams } from '@react-navigation/native';
// import { AgendaSreen } from 'src/screens/app/AgendaSreen/AgendaSreen';

export type AppStackParamList = {
  AppTabNavigation: NavigatorScreenParams<AppTabBottomTabParamlist>;
  ConsultasSreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true, // para aumentar a area arastavel dos dipositivos IOS
      }}
      initialRouteName='AppTabNavigation'>
      <Stack.Screen name="AppTabNavigation" component={AppTabNavigation} />
      {/* <Stack.Screen name="ConsultasSreen" component={AgendaSreen} /> */}
    </Stack.Navigator>
  );
}
