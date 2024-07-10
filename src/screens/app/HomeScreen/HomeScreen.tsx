import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Box, CardButton, Icon, Screen, Text} from '@components';
import {AppScreenProps, AppTabScreenProps} from 'src/routes/types';
import {
  Animated,
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  StatusBar,
  View,
  ViewToken,
} from 'react-native';
import {useAppTheme} from '@hooks';
import {HeaderHomeScreen} from './components/HeaderHomeScreen';
import {$shadowProps} from '@theme';
import {HeaderButtonsHomeScreen} from './components/HeaderButtonsHomeScreen';
import {CardAgendamentos} from './components/CardAgendamentos';

interface PropsCarrossel {
  title: string;
  descricao: string;
}
interface PropsConsultas {
  data: string;
  profissional: string;
  especialidade: string;
  id: string;
}

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {colors} = useAppTheme();

  const FlatlistRef = useRef<FlatList>(null);

  const listDadosCarrossel = [
    {
      title: 'Coronavírus',
      descricao: 'Principais informações sobre o Coronavírus.',
    },
    {
      title: 'Câncer de mama',
      descricao: 'sintomas,tratamento,causas e prevenção.',
    },
    {
      title: 'Imunização',
      descricao: 'Importância da vacinação.',
    },
  ];

  const listaProximasConsultas = [
    {
      data: '12/08/2024 09:30',
      profissional: 'Dr. João',
      especialidade: 'Psiquiatra',
      id: '001',
    },
    {
      data: '12/08/2024 09:30',
      profissional: 'Dr. Paulo',
      especialidade: 'Cardiologista',
      id: '002',
    },
    {
      data: '12/08/2024 09:30',
      profissional: 'Dr. Pedro',
      especialidade: 'Oftalmologista',
      id: '003',
    },
  ];

  const widthCard = Dimensions.get('screen').width - 20;
  function renderItem(data: ListRenderItemInfo<PropsCarrossel>) {
    return (
      <Box
        backgroundColor="grayWhite"
        // padding="s10"
        borderRadius="s16"
        width={widthCard}>
        <Box
          flexDirection="row"
          borderRadius="s16"
          //  style={$shadowProps}
        >
          <Box
            flex={1}
            width={100}
            borderTopLeftRadius="s16"
            borderBottomLeftRadius="s16"
            backgroundColor="purpleSecondary"
            justifyContent="center"
            alignItems="center">
            <Icon name="home" size={30} color="grayWhite" />
          </Box>
          <Box
            flex={2}
            padding="s10"
            height={130}
            backgroundColor="gray5"
            borderTopRightRadius="s16"
            borderBottomRightRadius="s16">
            <Text preset="headingMedium" bold color="teste" mb="s12">
              {data.item.title}
            </Text>
            <Text preset="paragraphMedium" color="teste">
              {data.item.descricao}
            </Text>
          </Box>
        </Box>
      </Box>
    );
  }

  function renderItemProximasConsultas({
    item,
  }: ListRenderItemInfo<PropsConsultas>) {
    const diaMes = item.data?.split('/')[0];
    return (
      <Box
        flexDirection="row"
        flex={1}
        backgroundColor="teste1"
        width={widthCard}
        paddingHorizontal="s16"
        padding="s14"
        borderRadius="s24">
        <Box
          height={120}
          width={80}
          alignItems="center"
          justifyContent="center"
          paddingHorizontal="s14"
          padding="s12"
          backgroundColor="primary"
          borderRadius="s20">
          <Text bold preset="headingLarge" color="grayWhite">
            {diaMes}
          </Text>
          <Text preset="headingMedium" color="grayWhite">
            Ter
          </Text>
        </Box>

        <Box
          padding="s12"
          ml="s10"
          alignItems="flex-start"
          justifyContent="center">
          <Text color="colorText" preset="headingMedium">
            {item.data?.split(' ')[1]} AM
          </Text>
          <Text fontWeight="700" bold preset="headingLarge" color="grayWhite">
            {item.profissional}
          </Text>
          <Text color="colorText" preset="headingMedium">
            {item.especialidade}
          </Text>
        </Box>
      </Box>
    );
  }

  const [activeBanner, setActiverBanner] = useState(0);

  function onViewableItemsChanged(callback: {
    changed: ViewToken[];
    viewableItems: ViewToken[];
  }) {
    if (
      callback.viewableItems[0]?.index !== undefined &&
      callback.viewableItems[0]?.index !== null
    ) {
      // console.log('changed',callback.changed)
      // console.log('viewableItems',callback.viewableItems);
      setActiverBanner(callback.viewableItems[0]?.index);
    }
  }

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 80,
      },
      onViewableItemsChanged,
    },
  ]);

  useEffect(() => {
    // criar a logica para voltar para o inicio quando chegar no final;
    // usar recursividade;
    if (activeBanner === listDadosCarrossel.length - 1) {
      return;
    }

    const timeClear = setTimeout(() => {
      FlatlistRef.current?.scrollToIndex({
        index: activeBanner + 1,
        animated: true,
      });

      setActiverBanner(prev => prev + 1);
    }, 3000);

    return () => clearTimeout(timeClear);
  }, [activeBanner]);

  // const fadeAnim = useRef(new Animated.Value(0)).current;

  return (
    //to place safeArea for IOS
    <Screen>
      {/* componentizar a status bar */}
      <HeaderHomeScreen />

      <Box>
        <HeaderButtonsHomeScreen />
      </Box>

      <Box mt="s16">
        <FlatList
          ref={FlatlistRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={listDadosCarrossel}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(index)}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          ItemSeparatorComponent={() => <View style={{marginRight: 12}}></View>}
        />

        <FlatList
          data={listDadosCarrossel}
          renderItem={({item, index}) => (
            <Box
              ml="s10"
              width={activeBanner === index ? 15 : 8}
              height={8}
              borderRadius="s8"
              backgroundColor={
                activeBanner === index ? 'purplePrimary' : 'gray3'
              }
            />
          )}
          style={{
            // paddingTop: 20,
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 15,
          }}
          scrollEnabled={false}
          horizontal
          keyExtractor={(item, index) => String(index)}
        />
      </Box>

      <CardAgendamentos />
    </Screen>
  );
}
