/* eslint-disable react-native/no-inline-styles */
import {Box, Button, Text} from '@components';
import React from 'react';

import {Pressable, TextInput, View} from 'react-native';

export function LoginScreen() {
  return (
    <Box flex={1} paddingHorizontal="s24">
      {/* <SimpleLogo width={350}/> */}
      <Box
        width={200}
        height={200}
        backgroundColor="gray3"
        // style={{width: 200, height: 200, backgroundColor: '#ccc'}}
      />

      <Box
        style={{alignContent: 'center', alignItems: 'center', marginTop: 50}}>
        <Text color="primary" preset="headingLarge">
          Olá{' '}
        </Text>
        <Text color="primary" preset="headingLarge">
          Bem vindo de volta
        </Text>
      </Box>

      <Box mt="s48" gap="s12">
        <TextInput
          style={{
            width: 300,
            height: 50,
            borderRadius: 16,
            padding: 12,
            backgroundColor: '#DEDEEB',
          }}
          placeholder="Prontuário"
          placeholderTextColor={'#414396'}
        />
        <TextInput
          style={{
            width: 300,
            height: 50,
            borderRadius: 16,
            padding: 12,
            backgroundColor: '#DEDEEB',
          }}
          placeholder="Cartão Sus"
          placeholderTextColor={'#414396'}
        />
      </Box>

      <Text color="primary" preset="paragraphSmall">
        Esqueci minha senha
      </Text>

      <Button title="Entrar" backgroundColor="primary" />

      <Button title="Criar uma conta" backgroundColor="gray4" />
    </Box>
  );
}
