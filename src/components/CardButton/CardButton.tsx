import React from 'react';
import {Box} from '../Box/Box';
import {useWindowDimensions} from 'react-native';
import {$shadowProps} from '@theme';
import {Icon, IconNames} from '../Icon/icon';
import {Text} from '../Text/Text';

interface Props {
  width: number;
  content: string;
  nameIcon: IconNames;
}
export function CardButton({content, nameIcon, width}: Props) {
  return (
    <Box
      width={width}
      height={75}
      style={$shadowProps}
      backgroundColor="teste1"
      borderRadius="s20"
      alignItems="center"
      justifyContent="center"
      >
      <Icon  name={nameIcon} size={30} color={'grayWhite'} />
      {/* <Text preset="paragraphSmall">{content}</Text> */}
    </Box>
  );
}
