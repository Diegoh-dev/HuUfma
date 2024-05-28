import React from 'react';
import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ConsultasSreen, HomeScreen, InfoScreen, ServicosScreen} from '@screens';
import {Icon, Text} from '@components';
import { AppTabBar } from './AppTabBar';

export type AppTabBottomTabParamlist = {
  HomeScreen: undefined;
  ConsultasSreen: undefined;
  ServicosScreen: undefined;
  infoScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamlist>();

export function AppTabNavigation() {

  function renderTabBar(props:BottomTabBarProps){
    return <AppTabBar {...props}/>
  }
  return (
    <Tab.Navigator
    tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              preset="paragraphCaption"
              color={focused ? 'primary' : 'backgroundContrast'}>
              Inicio
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              color={focused ? 'primary' : 'backgroundContrast'}
              name={focused ? 'homeFill' : 'home'}
            />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen name="ConsultasSreen" component={ConsultasSreen} />
      <Tab.Screen name="ServicosScreen" component={ServicosScreen} />
      <Tab.Screen name="infoScreen" component={InfoScreen} />
    </Tab.Navigator>
  );
}
