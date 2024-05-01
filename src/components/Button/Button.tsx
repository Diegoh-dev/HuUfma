import React from 'react';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {Text} from '../Text/Text';

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
    <TouchableOpacityBox 
    height={50} 
    paddingHorizontal='s20'
     borderRadius='s16' 
     alignItems='center' 
     justifyContent='center' 
     {...TouchableOpacityBoxProps} >
      {loading ? <ActivityIndicator color="grayWhite" /> : <Text>{title}</Text>}
    </TouchableOpacityBox>
  );
}
