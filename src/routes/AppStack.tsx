import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ConsultasSreen, HomeScreen} from '@screens';
import React from 'react';

export type AppStackParamList = {
  HomeScreen: undefined;
  Consultas:undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true, // para aumentar a area arastavel dos dipositivos IOS
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Consultas" component={ConsultasSreen} />
    </Stack.Navigator>
  );
}
