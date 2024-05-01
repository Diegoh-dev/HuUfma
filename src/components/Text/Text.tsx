import {createText} from '@shopify/restyle';
import {Theme} from '@theme';
import React, {ComponentProps, ReactNode} from 'react';
import { TextStyle } from 'react-native';

const RNText = createText<Theme>();

type TextProps = ComponentProps<typeof RNText>

export interface Props extends TextProps  {
  children: ReactNode;
  preset?:TextVariants;
}

export function Text({children,preset = 'paragraphMedium', style,...RNTextProps}: Props) {

  const typeSizeFont = $fontSizes[preset];
  return <RNText style={[typeSizeFont,style]} {...RNTextProps}>{children}</RNText>;
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';


// expecificado no prototipo
  export const $fontSizes : Record<TextVariants,TextStyle> = {
    headingLarge: {fontSize: 32, lineHeight: 38.4},
    headingMedium: {fontSize: 22, lineHeight: 26.4},
    headingSmall: {fontSize: 18, lineHeight: 23.4},

    paragraphLarge: {fontSize: 18, lineHeight: 25.2},
    paragraphMedium: {fontSize: 16, lineHeight: 22.4},
    paragraphSmall: {fontSize: 14, lineHeight: 19.6},

    paragraphCaption: {fontSize: 12, lineHeight: 16.8},
    paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};