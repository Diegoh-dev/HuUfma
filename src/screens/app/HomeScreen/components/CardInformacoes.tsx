import {Box, Icon, Text} from '@components';
import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  View,
  ViewToken,
} from 'react-native';

interface PropsCarrossel {
  title: string;
  descricao: string;
  tema: string;
  id: string;
}
export function CardInformacoes() {
  const FlatlistRef = useRef<FlatList>(null);
  const widthCard = Dimensions.get('screen').width - 50;

  const listDadosCarrossel = [
    {
      title: 'Aedes Aegypti',
      descricao: 'Combate ao aedes aegypti: Prevenção e controle da dangue...',
      tema:'Dengue',
      id: '1',
    },
    {
      title: 'Câncer de mama',
      descricao: 'sintomas,tratamento,causas e prevenção.',
      tema:'Câncer',
      id: '2',
    },
    {
      title: 'Imunização',
      descricao: 'Importância da vacinação.',
      tema:'Vacina',
      id: '3',
    },
  ];

  function renderItem({item}: ListRenderItemInfo<PropsCarrossel>) {
    return (
      <Box
        flexDirection="row"
        flex={1}
        mb='s10'
        // backgroundColor="teste4"
        backgroundColor='grayWhite'
        width={widthCard}
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
        <Box
          height={120}
          width={80}
          alignItems="center"
          justifyContent="center"
          paddingHorizontal="s14"
          padding="s8"
          backgroundColor="teste2"
          borderRadius="s16">
          <Icon name='science' color='grayWhite' size={30}/>
        </Box>

        <Box
          padding="s8"
          flex={1}
          // ml="s10"
          // alignItems="flex-start"
          // justifyContent="center"
          >
          <Text 
          fontWeight="700" color="primary" preset="headingMedium">
            {item.tema}
          </Text>

          <Box
          mt='s4'
          mb='s4'
            padding="s4"
            paddingHorizontal="s8"
            backgroundColor="primary"
            borderRadius="s16"
            width={60}
            >
            <Text color="colorText" preset="paragraphCaption">
              {item.tema}
            </Text>
          </Box>

         <Box flexDirection='row'>
         <Text
            style={{
              flex: 1,
              flexWrap: 'wrap',
            }}
            preset="paragraphSmall"
            color="primary">
            {item.descricao}
          </Text>
         </Box>
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
    <Box mt="s16">
      <FlatList
        ref={FlatlistRef}
        horizontal
        data={listDadosCarrossel}
        renderItem={renderItem}
        // style={{display:'flex', gap:5}}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        ItemSeparatorComponent={() => <View style={{marginLeft: 3,marginRight:3}}></View>}
      />

      <FlatList
        data={listDadosCarrossel}
        renderItem={({item, index}) => (
          <Box
            ml="s10"
            width={activeBanner === index ? 15 : 8}
            height={8}
            borderRadius="s8"
            backgroundColor={activeBanner === index ? 'purplePrimary' : 'gray3'}
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
