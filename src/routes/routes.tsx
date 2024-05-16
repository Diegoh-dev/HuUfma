import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SignUpScreen } from '@screens';

type RootStackParamList = {
    SignUpScreen:undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();


export function Router() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='SignUpScreen' screenOptions={{
        headerShown:false,
        fullScreenGestureEnabled:true,// para aumentar a area arastavel nos dipositivos IOS
      }}>
        <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
