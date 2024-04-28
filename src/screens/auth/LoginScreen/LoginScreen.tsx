import React from 'react';

import {Pressable, Text, TextInput, View} from 'react-native';

export function LoginScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', padding: 16}}>
      {/* <SimpleLogo width={350}/> */}
      <View style={{width: 200, height: 200, backgroundColor: '#ccc'}}></View>

      <View
        style={{alignContent: 'center', alignItems: 'center', marginTop: 50}}>
        <Text style={{fontSize: 30, color: '#414396', fontWeight: 'bold'}}>
          Olá
        </Text>
        <Text style={{fontSize: 30, color: '#414396', fontWeight: 'bold'}}>
          Olá Bem vindo de volta
        </Text>
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
        <Text
          style={{
            fontSize: 30,
            color: '#fff',
            fontWeight: 'bold',
          }}>
          Entrar
        </Text>
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
        <Text
          style={{
            fontSize: 30,
            color: '#414396',
            fontWeight: 'bold',
          }}>
          Criar uma conta
        </Text>
      </Pressable>
    </View>
  );
}
