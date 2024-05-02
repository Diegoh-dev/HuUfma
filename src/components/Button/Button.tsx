import React from 'react';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {Text} from '../Text/Text';
import {typeButtons} from './ButtonsPreset';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  preset: ButtonPreset;
  loading?: boolean;
  disabled?: boolean;
}

export function Button({
  title,
  preset = 'primary',
  loading,
  disabled,
  ...TouchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = typeButtons[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      height={50}
      paddingHorizontal="s20"
      borderRadius="s16"
      alignItems="center"
      justifyContent="center"
      {...buttonPreset.container}
      {...TouchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text color={buttonPreset.content}>{title}</Text>
      )}
    </TouchableOpacityBox>
  );
}
