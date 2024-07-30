import { AppTabBottomTabParamlist } from "./AppTabNavigation";
import {IconPros} from '@components';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamlist,
  {
    label: string;
    icon: {
      focused: IconPros['name'];
      unfocuses: IconPros['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'homeFill',
      unfocuses: 'home',
    },
  },
  AgendaSreen: {
    label: 'Agenda',
    icon: {
      focused: 'agenda',
      unfocuses: 'agenda',
    },
  },
  infoScreen: {
    label: 'Perfil',
    icon: {
      focused: 'profileFill',
      unfocuses: 'profile',
    },
  },
  ServicosScreen: {
    label: 'Serviço',
    icon: {
      focused: 'profileFill',
      unfocuses: 'profile',
    },
  },
};
