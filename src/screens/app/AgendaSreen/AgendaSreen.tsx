import React from 'react';
import {Box, HeaderApp, Icon, Screen, Text, TextInput} from '@components';
import {AppTabScreenProps} from 'src/routes/types';
import {$shadowProps} from '@theme';
import {FlatList, ListRenderItemInfo, View} from 'react-native';

interface PropsEspecialidade {
  especialidade: string;
}

export function AgendaSreen({navigation}: AppTabScreenProps<'AgendaSreen'>) {
  const listaEspecialidades = [
    {especialidade: 'Cardiologista'},
    {especialidade: 'Clín. geral'},
    {especialidade: 'Dermatologista'},
    {especialidade: 'Endocrinologista'},
    {especialidade: 'Fisioterapia'},
    {especialidade: 'Ginecologista'},
    {especialidade: 'Neorologista'},
    {especialidade: 'Psicologia'},
  ];

  function renderItem({item}: ListRenderItemInfo<PropsEspecialidade>) {
    return (
      <Box
      borderWidth={1}
      borderColor='primary'
        height={48}
        backgroundColor="grayWhite"
        padding="s8"
        borderRadius="s16"
        alignItems="center"
        justifyContent="center"
        // shadowColor="grayBlack"
        // shadowOffset={{
        //   width: 0,
        //   height: 3,
        // }}
        // shadowOpacity={0.17}
        // shadowRadius={3.05}
        // elevation={4}
        >
        <Text bold preset="paragraphMedium" color="primary">
          {item.especialidade}
        </Text>
      </Box>
    );
  }
  return (
    <Screen>
      <Box>
        <HeaderApp title="Médicos" placeholder="Buscar especialidade" />
        <Box mt="s10" mb='s10'>
          <FlatList
            data={listaEspecialidades}
            renderItem={renderItem}
            horizontal
            ItemSeparatorComponent={() => (
              <View style={{marginLeft: 3, marginRight: 3}}></View>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </Box>
      </Box>
    </Screen>
  );
}
