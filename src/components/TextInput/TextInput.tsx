import {useAppTheme} from '@hooks';
import React, {ReactElement, useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';

interface TextInputProps extends RNTextInputProps {
  boxProps?: BoxProps;
  LeftComponent?:ReactElement;
}

export function TextInput({boxProps,LeftComponent, ...RNTextInputProps}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);

  const {colors} = useAppTheme();

  const $textInputContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: 1,
    // borderWidth: errorMessage ? 2 : 1,
    padding: 's8',
    borderColor: 'grayWhite',
    backgroundColor:'grayWhite',
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

          {LeftComponent && (
            <Box ml='s12' mr="s12" justifyContent="center">
              {LeftComponent}
            </Box>
          )}

          <RNTextInput
            placeholderTextColor={colors.primary}
            {...RNTextInputProps}
          />
        </Box>
      </Pressable>
    </Box>
  );
}
