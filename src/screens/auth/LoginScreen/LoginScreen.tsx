/* eslint-disable react-native/no-inline-styles */
import {Text} from '@components';
import React from 'react';

import {Pressable, TextInput, View} from 'react-native';

export function LoginScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', padding: 16}}>
      {/* <SimpleLogo width={350}/> */}
      <View style={{width: 200, height: 200, backgroundColor: '#ccc'}} />

      <View
      
        style={{alignContent: 'center', alignItems: 'center', marginTop: 50}}>
        <Text color='primary'   preset='headingLarge'>Olá </Text>
        <Text color='primary'  preset='headingLarge'>Bem vindo de volta</Text>
      </View>

      <View style={{marginTop: 50, gap: 12}}>
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
      </View>

      <Text color='primary' preset='paragraphSmall'>Esqueci minha senha</Text>

      <Pressable
        style={{
          backgroundColor: '#414396',
          width: 300,
          height: 50,
          borderRadius: 16,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}>
        <Text>Entrar</Text>
      </Pressable>
      <Pressable
        style={{
          width: 300,
          height: 50,
          borderRadius: 16,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          marginTop: 10,
        }}>
        <Text>Criar uma conta</Text>
      </Pressable>
    </View>
  );
}
