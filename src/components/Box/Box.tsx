import {
  createBox,
  backgroundColor,
  BackgroundColorProps,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  border,
  BorderProps,
  spacingShorthand,
  SpacingShorthandProps,
  createRestyleComponent,
} from '@shopify/restyle';
import {Theme} from '@theme';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export const Box = createBox<Theme>();

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> &
  TouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, layout, spacing, border, spacingShorthand],
  TouchableOpacity,
);
