import React from 'react';
import {Screen} from '@components';
import {AppTabScreenProps} from 'src/routes/types';
import {HeaderHomeScreen} from './components/HeaderHomeScreen';
import {HeaderButtonsHomeScreen} from './components/HeaderButtonsHomeScreen';
import {CardAgendamentos} from './components/CardAgendamentos';
import {CardInformacoes} from './components/CardInformacoes';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <HeaderHomeScreen />

      <HeaderButtonsHomeScreen />

      <CardInformacoes />

      <CardAgendamentos />
    </Screen>
  );
}
