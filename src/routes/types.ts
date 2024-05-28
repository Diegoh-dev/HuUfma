import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {AppStackParamList} from './AppStack';
import {AuthStackParamList} from './AuthStack';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { AppTabBottomTabParamlist } from './AppTabNavigation';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

// RouteName => generic
export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;

  export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;


  //JUNTANDO AS DUAS CAMADAS DE NAVEGAÇÃO DO APP
  //https://reactnavigation.org/docs/typescript/#nesting-navigators
  export type AppTabScreenProps<RouteName extends keyof AppTabBottomTabParamlist> = CompositeScreenProps<
  BottomTabScreenProps<AppTabBottomTabParamlist, RouteName>,
  NativeStackScreenProps<AppStackParamList,'AppTabNavigation'>
>;