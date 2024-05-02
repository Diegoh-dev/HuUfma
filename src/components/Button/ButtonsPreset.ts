import {ThemeColor} from '@theme';
import {TouchableOpacityBoxProps} from '../Box/Box';
import {ButtonPreset} from './Button';

type ButtonUI = {
  container: TouchableOpacityBoxProps; //O botão
  content: ThemeColor; // o conteudo dentro do botão  (text ou loading)
};

export const typeButtons: Record<ButtonPreset, {
    default: ButtonUI;
    disabled: ButtonUI;
}> = {
  primary: {
    default:{
        container: {
          backgroundColor: 'primary',
        },
        content: 'primaryContrast',
    },
    disabled:{
        container: {
          backgroundColor: 'gray4',
        },
        content: 'gray2',
    }
  },
  outline: {
    default:{
        container: {
            borderWidth: 1,
            borderColor: 'primary',
          },
          content: 'primary',
    },
    disabled:{
        container: {
            backgroundColor: 'gray4',
        },
        content:'gray2'
    }
  },
};
