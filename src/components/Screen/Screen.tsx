import React, {ReactNode} from 'react';
import {Box, BoxProps} from '../Box/Box';
import {ScrollViewContainer, ViewContainer} from './components/ScreenComponent';

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
  ...BoxProps
}: ScreenProps) {
  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <Container>
      <Box paddingHorizontal="s24" {...BoxProps}>
        {children}
      </Box>
    </Container>
  );
}
