import {Box, Button, Screen, Text, TextInput} from '@components';
import React from 'react';

export function SignUpScreen() {
  return (
    <Screen flex={1} canGoBack>
      <Text preset="headingLarge" color="primary" mb="s32">
        Criar uma conta
      </Text>
      <Box mb='s24'>
        <TextInput
          autoCapitalize="words"
          placeholder="Nome"
          boxProps={{mb: 's20'}}
        />

        <TextInput
          autoCapitalize="words"
          placeholder="Sobrenome"
          boxProps={{mb: 's20'}}
        />
        <TextInput
          keyboardType="numeric"
          placeholder="Prontuário"
          boxProps={{mb: 's20'}}
        />
        <TextInput
          keyboardType="numeric"
          placeholder="Cartão do sus"
          boxProps={{mb: 's20'}}
        />
      </Box>

      <Button preset="primary" title="Criar minha conta" />
    </Screen>
  );
}
