import {Box, Icon, Text, TextInput} from '@components';
import {useAppTheme} from '@hooks';
import React from 'react';
import {Image, StatusBar} from 'react-native';

export function HeaderHomeScreen() {
  const {colors} = useAppTheme();
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={colors['primary']}
        showHideTransition={'fade'}
        networkActivityIndicatorVisible={true}
      />

      <Box backgroundColor='primary' height={200} borderRadius='s32' padding='s20' flexDirection='column' justifyContent='space-between'>

        <Box flexDirection='row' justifyContent='space-between' alignItems='center'>
          <Box>
            <Text preset='headingSmall' color='grayWhite'>Olá,</Text>
            <Text preset='headingMedium' color='grayWhite'>Diego Costa</Text>
          </Box>

          <Box flexDirection='row' alignItems='center' gap='s12'>
            <Icon name='bellIcon' color='grayWhite'/>
           <Box width={50} height={50} borderRadius='s16'>
           <Image
             style={{width:50,height:50,borderRadius:16}} 
            // width={60}
            // height={60}
             source={require('src/brand/medico.png')}/>
           </Box>
          </Box>
        </Box>

        <Box>
          <TextInput placeholder='Pesquisar médico' placeholderTextColor={colors.gray3} LeftComponent={<Icon name='search' color='primary'/>}/>
        </Box>

      </Box>
    </>
  );
}
