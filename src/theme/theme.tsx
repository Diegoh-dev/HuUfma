import {createTheme} from '@shopify/restyle';

export const palette = {
  purplePrimary: '#414396',
  purplePrimaryLight: '#DEDEEB',
  grayBlack: '#000000',
  grayWhite: '#FFFFFF',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.purplePrimary,
    primaryContrast: palette.grayWhite,

    background: palette.grayWhite,
    backgroundContrast: palette.grayBlack,

    //paleta de cores,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
  },
  textVariants:{
    defaults:{}
  }
});


export type Theme = typeof theme;

export type ThemeColor = keyof Theme['colors'];