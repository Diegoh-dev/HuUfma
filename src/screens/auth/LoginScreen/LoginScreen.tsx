/* eslint-disable react-native/no-inline-styles */
import {Box, Button, Text} from '@components';
import React from 'react';

import {Pressable, TextInput, View} from 'react-native';

export function LoginScreen() {
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
          Olá{' '}
        </Text>
        <Text color="primary" preset="headingLarge">
          Bem vindo de volta
        </Text>
      </Box>

      <Box mt="s48" mb="s20">
        <Text preset="paragraphSmall" color='gray2'>Prontuário</Text>
        <TextInput
          style={{
            height: 50,
            borderRadius: 16,
            padding: 12,
            backgroundColor: '#DEDEEB',
          }}
          // placeholder="Prontuário"
          placeholderTextColor={'#414396'}
        />

        <Text preset="paragraphSmall" color='gray2'>Cartão Sus</Text>
        <TextInput
          style={{
            height: 50,
            borderRadius: 16,
            padding: 12,
            backgroundColor: '#DEDEEB',
          }}
          // placeholder="Cartão Sus"
          placeholderTextColor={'#414396'}
        />

        <Text color="primary" preset="paragraphSmall">
          Esqueci minha senha
        </Text>
      </Box>

      <Box gap="s16">
        <Button preset="primary" title="Entrar" />

        <Button preset="outline" title="Criar uma conta" />
      </Box>
    </Box>
  );
}
