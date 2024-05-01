import {createText} from '@shopify/restyle';
import {Theme} from '@theme';
import React, {ComponentProps, ReactNode} from 'react';

const RNText = createText<Theme>();

type TextProps = ComponentProps<typeof RNText>

export interface Props extends TextProps  {
  children: ReactNode;
}

export function Text({children,...RNTextProps}: Props) {
  return <RNText {...RNTextProps}>{children}</RNText>;
}
