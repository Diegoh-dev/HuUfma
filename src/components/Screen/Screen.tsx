import React, {ReactNode} from 'react';
import {Box, BoxProps} from '../Box/Box';
import {ScrollViewContainer, ViewContainer} from './components/ScreenComponent';
import {useAppSafeArea} from '@hooks';

interface ScreenProps extends BoxProps {
  children: ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  ...BoxProps
}: ScreenProps) {
  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  const {bottom, top} = useAppSafeArea();
  return (
    <Container>
      <Box
        paddingHorizontal="s24"
        {...BoxProps}
        style={[{paddingBottom: bottom, paddingTop: top}, style]}>
        {children}
      </Box>
    </Container>
  );
}
