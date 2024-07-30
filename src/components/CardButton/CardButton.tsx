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
    <Box alignItems='center'>
    <Box
      width={width}
      height={60}
      // style={$shadowProps}
      backgroundColor="grayWhite"
      borderRadius="s16"
      alignItems="center"
      justifyContent="center"
      shadowColor='grayBlack'
      shadowOffset={{
        width:0,
        height:3,
      }}
      shadowOpacity={0.17}
      shadowRadius={3.05}
      elevation={4}
      >
      {/* <Box alignItems='center' justifyContent='center' backgroundColor='primary' width={50} borderRadius='s16' height={40}> */}
      <Icon  name={nameIcon} size={30} color={'primary'} />
      {/* </Box> */}
    </Box>
      <Text mt='s4' style={{fontWeight:'700'}} preset="paragraphLarge" color='primary' bold>{content}</Text>
    </Box>
  );
}
