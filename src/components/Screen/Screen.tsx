import React, {ReactNode} from 'react';
import {Box, BoxProps} from '../Box/Box';
import {ScrollViewContainer, ViewContainer} from './components/ScreenComponent';
import {useAppSafeArea, useAppTheme} from '@hooks';
import {ScreenHeader} from './components/ScreenHeader';
import {KeyboardAvoidingView, Platform} from 'react-native';

export interface ScreenProps extends BoxProps {
  children: ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  title,
  style,
  ...BoxProps
}: ScreenProps) {
  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  const {bottom, top} = useAppSafeArea();
  const {colors} = useAppTheme();
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor='#F2F2F2'>
        <Box
          paddingHorizontal="s10"
          style={[{paddingBottom: bottom, paddingTop: top}, style]}
          {...BoxProps}>
          {canGoBack && <ScreenHeader canGoBack={canGoBack} title={title}/>}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
