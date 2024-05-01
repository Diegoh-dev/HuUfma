import {ThemeColor} from '@theme';
import React from 'react';
import {ActivityIndicator as RNActivityIndicator} from 'react-native';
import {useAppTheme} from '@hooks';

interface Props {
  color: ThemeColor;
}
export function ActivityIndicator({color}: Props) {
  const {colors} = useAppTheme();
  return <RNActivityIndicator color={colors[color]} />;
}
