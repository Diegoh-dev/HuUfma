import React from 'react';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}

export function Button({
  title,
  loading,
  ...TouchableOpacityBoxProps
}: ButtonProps) {
  return (
    <TouchableOpacityBox height={50} {...TouchableOpacityBoxProps}>
      {loading ? <ActivityIndicator color="grayWhite" /> : title}
    </TouchableOpacityBox>
  );
}
