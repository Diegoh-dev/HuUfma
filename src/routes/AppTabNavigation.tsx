import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ConsultasSreen, HomeScreen, InfoScreen, ServicosScreen} from '@screens';

export type AppTabBottomTabParamlist = {
  HomeScreen: undefined;
  ConsultasSreen: undefined;
  ServicosScreen: undefined;
  infoScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamlist>();

export function AppTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ConsultasSreen" component={ConsultasSreen} />
      <Tab.Screen name="ServicosScreen" component={ServicosScreen} />
      <Tab.Screen name="infoScreen" component={InfoScreen} />
    </Tab.Navigator>
  );
}
