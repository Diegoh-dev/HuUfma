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
  ConsultasSreen: {
    label: 'Serviços',
    icon: {
      focused: 'home',
      unfocuses: 'home',
    },
  },
  infoScreen: {
    label: 'Novidades',
    icon: {
      focused: 'arrowLeft',
      unfocuses: 'arrowLeft',
    },
  },
  ServicosScreen: {
    label: 'Meu perfil',
    icon: {
      focused: 'profileFill',
      unfocuses: 'profile',
    },
  },
};
