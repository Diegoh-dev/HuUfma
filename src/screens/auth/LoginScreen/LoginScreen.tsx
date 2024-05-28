/* eslint-disable react-native/no-inline-styles */
import {Box, Button, Text, TextInput} from '@components';
import React from 'react';

import {Pressable, View} from 'react-native';
import { AuthScreenProps } from 'src/routes/types';

export function LoginScreen({}:AuthScreenProps<'LoginScreen'>) {
  return (
    <Box flex={1} paddingHorizontal="s24" mt="s16">
      {/* <SimpleLogo width={350}/> */}

      <Box alignItems="center">
        <Box
          width={150}
          height={150}
          backgroundColor="gray3"
          borderRadius="s16"
        />
      </Box>

      <Box
        style={{alignContent: 'center', alignItems: 'center', marginTop: 50}}>
        <Text color="primary" preset="headingLarge">
          Hospital Universitário
        </Text>
        <Text color="gray2" preset="paragraphLarge">
          Universidade Federal do Maranhão
        </Text>
      </Box>

      <Box mt="s48" mb="s24">
        <TextInput
          boxProps={{mb: 's20'}}
          keyboardType="numeric"
          placeholder="Prontuário"
        />
        <TextInput
          boxProps={{mb: 's10'}}
          keyboardType="numeric"
          placeholder="Cartão Sus"
        />

        {/* <Text color="primary" preset="paragraphSmall">
          Esqueci minha senha
        </Text> */}
      </Box>

      <Box gap="s16">
        <Button preset="primary" title="Entrar" />

        {/* <Button preset="outline" title="Criar uma conta" /> */}
      </Box>
    </Box>
  );
}
