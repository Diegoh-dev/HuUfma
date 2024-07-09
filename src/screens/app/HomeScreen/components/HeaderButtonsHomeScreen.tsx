import { Box, CardButton, Text } from "@components";
import React from "react";
import { useWindowDimensions } from "react-native";

export function HeaderButtonsHomeScreen() {
    const {width} = useWindowDimensions();
    const CARD_WIDTH = width / 4.5;
    return (
      <>
      <Text mt="s12" preset="headingMedium">Serviços</Text>
        <Box
        mt="s12"
        // padding="s12"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        >
        <CardButton content="Histórico Médico" nameIcon="assignment" width={CARD_WIDTH} />
        <CardButton content="Exames" nameIcon="science" width={CARD_WIDTH} />
        <CardButton
          content="Consultas"
          nameIcon="calendar"
          width={CARD_WIDTH}
        />
   
        <CardButton
          content="Teste"
          nameIcon="calendar"
          width={CARD_WIDTH}
        />
      </Box>
      </>
    )
}