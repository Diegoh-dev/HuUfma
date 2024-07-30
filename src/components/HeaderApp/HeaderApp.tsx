import {useAppTheme} from '@hooks';
import React from 'react';
import {StatusBar} from 'react-native';
import {Text} from '../Text/Text';
import {Box} from '../Box/Box';
import {Icon} from '../Icon/icon';
import {TextInput} from '../TextInput/TextInput';
interface Props {
  title: string;
  placeholder: string;
}

export function HeaderApp({title, placeholder}: Props) {
  const {colors} = useAppTheme();
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={colors['primary']}
        showHideTransition={'fade'}
        networkActivityIndicatorVisible={true}
      />
      <Box
        backgroundColor="primary"
        height={200}
        borderRadius="s32"
        padding="s20"
        flexDirection="column"
        justifyContent="space-between">
        <Text mt='s14' bold preset='headingLarge' color='grayWhite'>{title}</Text>

        <Box>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors.gray3}
            LeftComponent={<Icon name="search" color="primary" />}
          />
        </Box>
      </Box>
    </>
  );
}
