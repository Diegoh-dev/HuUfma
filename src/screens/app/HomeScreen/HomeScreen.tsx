import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Box, CardButton, Icon, Screen, Text} from '@components';
import {AppScreenProps, AppTabScreenProps} from 'src/routes/types';
import {Animated, Dimensions, FlatList, ListRenderItemInfo, StatusBar, ViewToken, } from 'react-native';
import {useAppTheme} from '@hooks';
import {HeaderHomeScreen} from './components/HeaderHomeScreen';
import {$shadowProps} from '@theme';
import {HeaderButtonsHomeScreen} from './components/HeaderButtonsHomeScreen';

interface PropsCarrossel {
  title: string;
  descricao: string;
}

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {colors} = useAppTheme();

  const FlatlistRef = useRef<FlatList>(null);

  const listDadosCarrossel = [
    {
      title:'Coronavírus',
      descricao:'Principais informações sobre o Coronavírus.'
    },
    {
      title:'Câncer de mama',
      descricao:'sintomas,tratamento,causas e prevenção.'
    },
    {
      title:'Imunização',
      descricao:'Importância da vacinação.'
    },
  ]

  function renderItem(data:ListRenderItemInfo<PropsCarrossel>){

    return (
      <Box padding="s12" borderRadius="s16" width={Dimensions.get('screen').width} >
      <Box flexDirection="row" borderRadius="s16" style={$shadowProps}>
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
          <Text preset="headingMedium" bold color="teste" mb='s12'>
           {data.item.title}
          </Text>
          <Text preset="paragraphMedium" color='teste'>
           {data.item.descricao}
          </Text>
        </Box>
      </Box>
    </Box>
    )

  }

  const [activeBanner,setActiverBanner] = useState(0);



  function onViewableItemsChanged(callback: {changed: ViewToken[], viewableItems: ViewToken[]}){
    if(callback.viewableItems[0]?.index !== undefined && callback.viewableItems[0]?.index !== null){
      // console.log('changed',callback.changed)
      // console.log('viewableItems',callback.viewableItems);
      setActiverBanner(callback.viewableItems[0]?.index);
    }
  }


  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold:80,
      },
      onViewableItemsChanged
    }
  ])

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
    <Screen style={{paddingHorizontal: 0, paddingTop: 0}}>
      {/* componentizar a status bar */}
      <HeaderHomeScreen />

        <HeaderButtonsHomeScreen />

       <Box>
       <FlatList
        ref={FlatlistRef}
        horizontal
       showsHorizontalScrollIndicator={false}
        data={listDadosCarrossel}
        renderItem={renderItem}
        keyExtractor={(item,index) => String(index)}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        />

      <FlatList
  
        data={listDadosCarrossel}
        renderItem={({ item, index }) => (
          <Box
          width={ activeBanner === index ? 15 : 8}
          height={8}
          borderRadius='s8'
          backgroundColor={activeBanner === index ? 'purplePrimary' : 'gray3'}
          marginHorizontal='s4'
          />
          // <Animated.View
          //   // layout={Layout}
          //   // entering={FadeInLeft}
          //   // exiting={FadeOutRight}
          //   style={{
          //     width: activeBanner === index ? 15 : 8,
          //     height: 8,
          //     borderRadius: 4,
          //     backgroundColor:  activeBanner === index ? 'purplePrimary' : 'gray4',
          //     marginHorizontal: 2,
          //   }}
          // />
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


      {/* componentizar */}
      {/* <Box padding="s12" borderRadius="s16" >
        <Box flexDirection="row" borderRadius="s16" style={$shadowProps}>
          <Box
            flex={1}
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
            <Text preset="headingMedium" bold color="teste" mb='s12'>
              Coronavírus
            </Text>
            <Text preset="paragraphMedium" color='teste'>
             Principais informações sobre o Coronavírus. 
            </Text>
          </Box>
        </Box>
      </Box> */}

      <Box backgroundColor="grayWhite" padding="s12">
        <Box flexDirection="row" gap="s8" alignItems="center">
          <Box
            backgroundColor="gray4"
            width={50}
            height={50}
            borderRadius="s16"></Box>

          <Box>
            <Text preset="paragraphSmall" color="purpleSecondary">
              Hu-ufma
            </Text>
            <Text preset="paragraphCaptionSmall" color="purpleSecondary">
              Noticias
            </Text>
          </Box>
        </Box>

        <Box
          backgroundColor="gray3"
          alignSelf="stretch"
          height={250}
          mt="s8"
          borderRadius="s16"></Box>
      </Box>
    </Screen>
  );
}
