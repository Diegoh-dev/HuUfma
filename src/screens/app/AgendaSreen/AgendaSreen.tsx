import React from 'react';
import {Box, HeaderApp, Icon, Screen, Text, TextInput} from '@components';
import {AppTabScreenProps} from 'src/routes/types';
import {$shadowProps} from '@theme';
import {FlatList, Image, ListRenderItemInfo, View} from 'react-native';

interface PropsEspecialidade {
  especialidade: string;
}
interface PropsListaMedicos {
  strProfissional: string,
  strEspecialidadeMedica: string,
  strEstadoConselho:string,
  strNumeroConselho: string,
  strSigla:string,
  foto:string,
}

export function AgendaSreen({navigation}: AppTabScreenProps<'AgendaSreen'>) {
  const listaEspecialidades = [
    {especialidade: 'Todos'},
    {especialidade: 'Cardiologista'},
    {especialidade: 'Clín. geral'},
    {especialidade: 'Dermatologista'},
    {especialidade: 'Endocrinologista'},
    {especialidade: 'Fisioterapia'},
    {especialidade: 'Ginecologista'},
    {especialidade: 'Neorologista'},
    {especialidade: 'Psicologia'},
  ];

  const listaMedicos = [
    {
      strProfissional: 'Dr. Rodger Struck',
      strEspecialidadeMedica: 'Cardiologista',
      strEstadoConselho: 'MA',
      strNumeroConselho: '5555',
      strSigla: 'CRM',
      foto:'src/brand/medicoRodger.png'
    },
    {
      strProfissional: 'Dr. Paulo Santos',
      strEspecialidadeMedica: 'Fisioterapia',
      strEstadoConselho: 'MA',
      strNumeroConselho: '0101',
      strSigla: 'CRM',
      foto:'src/brand/medicoPaulo.png'
    },
    {
      strProfissional: 'Dr. João Carvalho',
      strEspecialidadeMedica: 'Neorologista',
      strEstadoConselho: 'MA',
      strNumeroConselho: '3131',
      strSigla: 'CRM',
      foto:'src/brand/medicoJoao.png'

    },
    // {
    //   strProfissional: 'Dra. Maria Reis',
    //   strEspecialidadeMedica: 'Psicologia',
    //   strEstadoConselho: 'MA',
    //   strNumeroConselho: '4545',
    //   strSigla: 'CRM',
    // },
    {
      strProfissional: 'Dra. Jade Oliveira',
      strEspecialidadeMedica: 'Endocrinologista',
      strEstadoConselho: 'MA',
      strNumeroConselho: '6666',
      strSigla: 'CRM',
      foto:'src/brand/medicaJade.png'

    },
    {
      strProfissional: 'Dr. Thiago',
      strEspecialidadeMedica: 'Neorologista',
      strEstadoConselho: 'MA',
      strNumeroConselho: '3131',
      strSigla: 'CRM',
      foto:'src/brand/medico.png'

    },
    // {
    //   strProfissional: 'Dra. Ana',
    //   strEspecialidadeMedica: 'Psicologia',
    //   strEstadoConselho: 'MA',
    //   strNumeroConselho: '4545',
    //   strSigla: 'CRM',
    // },
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
        <Text style={{fontWeight:'700'}} preset="paragraphMedium" color="primary">
          {item.especialidade}
        </Text>
      </Box>
    );
  }

  function renderItemCardMedico({item}:ListRenderItemInfo<PropsListaMedicos>){
    return(
      <Box
        flexDirection="row"
        alignItems='center'
        mb='s10'
        // flex={1}
        // backgroundColor="teste1"
        backgroundColor='grayWhite'
        // width={widthCard}
        paddingHorizontal="s16"
        padding="s14"
        borderRadius="s24"
        shadowColor='grayBlack'
        shadowOffset={{
          width:0,
          height:3,
        }}
        shadowOpacity={0.17}
        shadowRadius={3.05}
        elevation={4}
        >

        {/* <Box
          height={60}
          width={60}
          alignItems="center"
          justifyContent="center"
          paddingHorizontal="s14"
          padding="s12"
          backgroundColor="primary"
          borderRadius="s16"> */}
            <Image
             style={{width:60,height:60,borderRadius:16}} 
            // width={60}
            // height={60}
             source={require('src/brand/medicoRodger.png')}/>
        {/* </Box> */}

        <Box
          ml="s16"
          alignItems="flex-start"
          justifyContent="center">
      
          <Text fontWeight="700" bold preset="headingMedium" color="primary">
          {item.strProfissional}
          </Text>
          <Text fontWeight="600" color="nomeMedico" preset="paragraphLarge">
           {item.strEspecialidadeMedica}
          </Text>
          <Text color="nomeMedico" preset="paragraphMedium">
           {item.strSigla}: {item.strNumeroConselho} - {item.strEstadoConselho}
          </Text>
        </Box>
      </Box>
    )
  }
  return (
    <Screen flex={1}>
      <HeaderApp title="Médicos" placeholder="Buscar especialidade" />
      <Box mt="s14" mb="s14">
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

        <FlatList
          data={listaMedicos}
          renderItem={renderItemCardMedico}
          ItemSeparatorComponent={() => (
            <View style={{marginLeft: 3, marginRight: 3}}></View>
          )}
          showsVerticalScrollIndicator={false}
        />
    </Screen>
  );
}
