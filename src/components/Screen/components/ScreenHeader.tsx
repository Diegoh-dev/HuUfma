import React from 'react';
import {ScreenProps} from '../Screen';
import {Box, TouchableOpacityBox,Text,Icon} from '@components';
import { useNavigation } from '@react-navigation/native';


type Props = Pick<ScreenProps, 'canGoBack' | 'title'>;

const ICON_SIZE = 20;
export function ScreenHeader({canGoBack, title}: Props) {
  const navigation = useNavigation();
  // const navigation = useNavigation();
    if(!title && !canGoBack){
      return null;
    }
    
  return (
    <Box flexDirection="row" justifyContent="space-between" mb="s24">
      {canGoBack && (
        <TouchableOpacityBox
          onPress={navigation.goBack}
          flexDirection="row"
          alignItems="center">
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {!title && (
            <Text preset="paragraphMedium" semiBold marginLeft="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {title && <Text preset="headingSmall">{title}</Text>}
      {/* hack para o alinhamento do titulo da tela. */}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  );
}
