import React from 'react';
import {Box, Icon, IconPros, Screen, Text} from '@components';
import {AppScreenProps, AppTabScreenProps} from 'src/routes/types';
import {$shadowProps} from '@theme';
import { HeaderHomeScreen } from '../HomeScreen/components/HeaderHomeScreen';

interface listaServicosProps {
  tela:string;
  Icon:IconPros['name']
}
export function ServicosScreen({
  navigation,
}: AppTabScreenProps<'ServicosScreen'>) {

  const listaServicos : listaServicosProps[] = [
    {
      tela:'Consulta',
      Icon:'calendar',
    },
    {
      tela:'Exame',
      Icon:'science',
    },
    {
      tela:'Vacinação',
      Icon:'calendar',
    },
    {
      tela:'Laboratório',
      Icon:'science',
    },
    {
      tela:'Telemedicina',
      Icon:'homeFill',
    },
    {
      tela:'Fisioterapia e Reabilitação',
      Icon:'calendar',
    },
    // {
    //   tela:'Cuidados Domiciliares',
    //   Icon:'homeFill',
    // },
   
  ]

  return (
    <Screen>
      {/* <HeaderHomeScreen/> */}
      <Text>Gerenciar meus serviços</Text>
      <Box mt="s24">
        {listaServicos.map((tela,index) => (
        <Box borderRadius="s16" mt="s12" key={String(index)}>
          <Box flexDirection="row" borderRadius="s16" style={$shadowProps}>
            <Box
              width={7}
              borderTopLeftRadius="s8"
              borderBottomLeftRadius="s8"
              height={'auto'}
              backgroundColor="primary"></Box>
            <Box
              flex={2}
              alignItems="center"
              flexDirection="row"
              backgroundColor="gray5"
              borderTopRightRadius="s8"
              borderBottomRightRadius="s8"
              padding="s20"
              gap="s10">
              <Box backgroundColor="primary" padding="s8" borderRadius="s8">
                <Icon name={tela.Icon} color="grayWhite" size={30} />
              </Box>
              <Text preset="headingMedium" bold>
                {tela.tela}
              </Text>
            </Box>
          </Box>
        </Box>

        ))}

        {/* <Box borderRadius="s16" mt="s12">
          <Box flexDirection="row" borderRadius="s16" style={$shadowProps}>
            <Box
              width={7}
              borderTopLeftRadius="s8"
              borderBottomLeftRadius="s8"
              height={'auto'}
              backgroundColor="primary"></Box>
            <Box
              flex={2}
              alignItems="center"
              flexDirection="row"
              backgroundColor="gray5"
              borderTopRightRadius="s8"
              borderBottomRightRadius="s8"
              padding="s20"
              gap="s10">
              <Box backgroundColor="primary" padding="s8" borderRadius="s8">
                <Icon name="science" color="grayWhite" size={30} />
              </Box>
              <Text preset="headingMedium" bold>
                Exame
              </Text>
            </Box>
          </Box>
        </Box>

        <Box borderRadius="s16" mt="s12">
          <Box flexDirection="row" borderRadius="s16" style={$shadowProps}>
            <Box
              width={7}
              borderTopLeftRadius="s8"
              borderBottomLeftRadius="s8"
              height={'auto'}
              backgroundColor="primary"></Box>
            <Box
              flex={2}
              alignItems="center"
              flexDirection="row"
              backgroundColor="gray5"
              borderTopRightRadius="s8"
              borderBottomRightRadius="s8"
              padding="s20"
              gap="s10">
              <Box backgroundColor="primary" padding="s8" borderRadius="s8">
                <Icon name="homeFill" color="grayWhite" size={30} />
              </Box>
              <Text preset="headingMedium" bold>
              Vacinação
              </Text>
            </Box>
          </Box>
        </Box>
        <Box borderRadius="s16" mt="s12">
          <Box flexDirection="row" borderRadius="s16" style={$shadowProps}>
            <Box
              width={7}
              borderTopLeftRadius="s8"
              borderBottomLeftRadius="s8"
              height={'auto'}
              backgroundColor="primary"></Box>
            <Box
              flex={2}
              alignItems="center"
              flexDirection="row"
              backgroundColor="gray5"
              borderTopRightRadius="s8"
              borderBottomRightRadius="s8"
              padding="s20"
              gap="s10">
              <Box backgroundColor="primary" padding="s8" borderRadius="s8">
                <Icon name="science" color="grayWhite" size={30} />
              </Box>
              <Text preset="headingMedium" bold>
              Laboratório
              </Text>
            </Box>
          </Box>
        </Box>
        <Box borderRadius="s16" mt="s12">
          <Box flexDirection="row" borderRadius="s16" style={$shadowProps}>
            <Box
              width={7}
              borderTopLeftRadius="s8"
              borderBottomLeftRadius="s8"
              height={'auto'}
              backgroundColor="primary"></Box>
            <Box
              flex={2}
              alignItems="center"
              flexDirection="row"
              backgroundColor="gray5"
              borderTopRightRadius="s8"
              borderBottomRightRadius="s8"
              padding="s20"
              gap="s10">
              <Box backgroundColor="primary" padding="s8" borderRadius="s8">
                <Icon name="homeFill" color="grayWhite" size={30} />
              </Box>
              <Text preset="headingMedium" bold>
              Telemedicina
              </Text>
            </Box>
          </Box>
        </Box>
        <Box borderRadius="s16" mt="s12">
          <Box flexDirection="row" borderRadius="s16" style={$shadowProps}>
            <Box
              width={7}
              borderTopLeftRadius="s8"
              borderBottomLeftRadius="s8"
              height={'auto'}
              backgroundColor="primary"></Box>
            <Box
              flex={2}
              alignItems="center"
              flexDirection="row"
              backgroundColor="gray5"
              borderTopRightRadius="s8"
              borderBottomRightRadius="s8"
              padding="s20"
              gap="s10">
              <Box backgroundColor="primary" padding="s8" borderRadius="s8">
                <Icon name="homeFill" color="grayWhite" size={30} />
              </Box>
              <Text preset="headingMedium" bold>
              Fisioterapia e Reabilitação
              </Text>
            </Box>
          </Box>
        </Box>
        <Box borderRadius="s16" mt="s12">
          <Box flexDirection="row" borderRadius="s16" style={$shadowProps}>
            <Box
              width={7}
              borderTopLeftRadius="s8"
              borderBottomLeftRadius="s8"
              height={'auto'}
              backgroundColor="primary"></Box>
            <Box
              flex={2}
              alignItems="center"
              flexDirection="row"
              backgroundColor="gray5"
              borderTopRightRadius="s8"
              borderBottomRightRadius="s8"
              padding="s20"
              gap="s10">
              <Box backgroundColor="primary" padding="s8" borderRadius="s8">
                <Icon name="homeFill" color="grayWhite" size={30} />
              </Box>
              <Text preset="headingMedium" bold>
              Cuidados Domiciliares
              </Text>
            </Box>
          </Box>
        </Box> */}
      </Box>
    </Screen>
  );
}
