import React from 'react';
import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AgendaSreen, HomeScreen, InfoScreen, ServicosScreen} from '@screens';
import {Icon, Text} from '@components';
import { AppTabBar } from './AppTabBar';

export type AppTabBottomTabParamlist = {
  HomeScreen: undefined;
  ServicosScreen: undefined;
  AgendaSreen: undefined;
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
      <Tab.Screen name="ServicosScreen" component={ServicosScreen} />
      <Tab.Screen name="AgendaSreen" component={AgendaSreen} />
      <Tab.Screen name="infoScreen" component={InfoScreen} />
    </Tab.Navigator>
  );
}
