import {Box, Text} from '@components';
import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  View,
  ViewToken,
} from 'react-native';

interface PropsConsultas {
  data: string;
  profissional: string;
  especialidade: string;
  id: string;
}

export function CardAgendamentos() {
  // const widthCard = Dimensions.get('screen').width - 20;
  const widthCard = Dimensions.get('screen').width - 50;

  const [activeBannerAgendamentos, setActiverBannerAgendamentos] = useState(0);

  const FlatlistRef = useRef<FlatList>(null);

  const listaProximasConsultas = [
    {
      data: '12/08/2024 09:30',
      profissional: 'Dr. João',
      especialidade: 'Psiquiatra',
      id: '001',
    },
    {
      data: '13/08/2024 10:30',
      profissional: 'Dr. Paulo',
      especialidade: 'Cardiologista',
      id: '002',
    },
    {
      data: '18/08/2024 11:30',
      profissional: 'Dr. Pedro',
      especialidade: 'Oftalmologista',
      id: '003',
    },
  ];

  function renderItemProximasConsultas({
    item,
  }: ListRenderItemInfo<PropsConsultas>) {
    const diaMes = item.data?.split('/')[0];
    return (
      <Box
        flexDirection="row"
        mb='s10'
        flex={1}
        // backgroundColor="teste1"
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
          padding="s12"
          backgroundColor="primary"
          borderRadius="s16">
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
          <Text color="primary" preset="headingMedium">
            {item.data?.split(' ')[1]} AM
          </Text>
          <Text fontWeight="700" bold preset="headingLarge" color="primary">
            {item.profissional}
          </Text>
          <Text color="primary" preset="headingMedium">
            {item.especialidade}
          </Text>
        </Box>
      </Box>
    );
  }

  function onViewableItemsChanged(callback: {
    changed: ViewToken[];
    viewableItems: ViewToken[];
  }) {
    if (
      callback.viewableItems[0]?.index !== undefined &&
      callback.viewableItems[0]?.index !== null
    ) {
    //   console.log('changed',callback.changed)
    //   console.log('viewableItems',callback.viewableItems);
      setActiverBannerAgendamentos(callback.viewableItems[0]?.index);
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
    if (activeBannerAgendamentos === listaProximasConsultas.length - 1) {
      return;
    }

    const timeClearAgendamentos = setTimeout(() => {
      FlatlistRef.current?.scrollToIndex({
        index: activeBannerAgendamentos + 1,
        animated: true,
      });

      setActiverBannerAgendamentos(prev => prev + 1);
    }, 5000);

    return () => clearTimeout(timeClearAgendamentos);
  }, [activeBannerAgendamentos]);

  return (
    <Box>
      <Text mb="s16" fontWeight="bold" color="primary" preset="headingMedium">
        Agendamentos
      </Text>
      <FlatList
        ref={FlatlistRef}
        horizontal
        data={listaProximasConsultas}
        renderItem={renderItemProximasConsultas}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        // ItemSeparatorComponent={() => <View style={{marginRight: 12}}></View>}
        ItemSeparatorComponent={() => <View style={{marginLeft: 3,marginRight:3}}></View>}
      />

      <FlatList
        data={listaProximasConsultas}
        renderItem={({item, index}) => (
          <Box
            ml="s10"
            width={activeBannerAgendamentos === index ? 15 : 8}
            height={8}
            borderRadius="s8"
            backgroundColor={
              activeBannerAgendamentos === index ? 'purplePrimary' : 'gray3'
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
