import {useAppTheme} from '@hooks';
import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';

interface TextInputProps extends RNTextInputProps {
  boxProps?: BoxProps;
}

export function TextInput({boxProps, ...RNTextInputProps}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);

  const {colors} = useAppTheme();

  const $textInputContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: 2,
    // borderWidth: errorMessage ? 2 : 1,
    padding: 's8',
    borderColor: 'gray4',
    // borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's16',
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Box {...$textInputContainer}>
          <RNTextInput
            {...RNTextInputProps}
            placeholderTextColor={colors.primary}
          />
        </Box>
      </Pressable>
    </Box>
  );
}
