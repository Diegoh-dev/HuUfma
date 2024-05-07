/* eslint-disable react-native/no-inline-styles */
import {Box, Button, Text, TextInput} from '@components';
import React from 'react';

import {Pressable, View} from 'react-native';

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

      <Box mt="s48" mb="s40">
        {/* <Text preset="paragraphSmall" color='primary'>Prontuário</Text> */}
        {/* <TextInput
        keyboardType='numeric'
          style={{
            height: 50,
            borderRadius: 16,
            padding: 12,
            backgroundColor: '#E1E1E1',
            marginBottom:16,
          }}
          placeholder="Prontuário"
          placeholderTextColor={'#414396'}
        /> */}
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

        {/* <Text preset="paragraphSmall" color='primary'>Cartão Sus</Text> */}
        {/* <TextInput
               keyboardType='numeric'
          style={{
            height: 50,
            borderRadius: 16,
            padding: 12,
            backgroundColor: '#E1E1E1',
          }}
          placeholder="Cartão Sus"
          placeholderTextColor={'#414396'}
        /> */}

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
