import { Box, Text } from '@components';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, ListRenderItemInfo, View, ViewToken } from 'react-native';

interface PropsCarrossel {
    title: string;
    descricao: string;
       id:string;
  }
export function CardInformacoes() {
  const FlatlistRef = useRef<FlatList>(null);
  const widthCard = Dimensions.get('screen').width - 20;

  const listDadosCarrossel = [
    {
      title: 'Coronavírus',
      descricao: 'Principais informações sobre o Coronavírus.',
      id:'1'
    },
    {
      title: 'Câncer de mama',
      descricao: 'sintomas,tratamento,causas e prevenção.',
         id:'2'
    },
    {
      title: 'Imunização',
      descricao: 'Importância da vacinação.',
         id:'3'
    },
  ];

  function renderItem({
    item,
  }: ListRenderItemInfo<PropsCarrossel>) {
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
         oi
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
             AM
          </Text>
          <Text fontWeight="700" bold preset="headingLarge" color="grayWhite">
            profissional
          </Text>
          <Text color="colorText" preset="headingMedium">
       especialidade
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


  return (
    <Box mt='s16'>
      {/* <Text mb="s16" fontWeight="bold" color="teste" preset="headingMedium">
        Agendamentos
      </Text> */}
      <FlatList
        ref={FlatlistRef}
        horizontal
        data={listDadosCarrossel}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
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
          alignSelf: 'center',
          marginTop: 10,
          marginBottom: 15,
        }}
        scrollEnabled={false}
        horizontal
        keyExtractor={(item, index) => String(index)}
      />
    </Box>
  );
}
