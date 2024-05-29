import { Box, CardButton } from "@components";
import React from "react";
import { useWindowDimensions } from "react-native";

export function HeaderButtonsHomeScreen() {
    const {width} = useWindowDimensions();
    const CARD_WIDTH = width / 3.5;
    return (
        <Box
        padding="s12"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mt="s8">
        <CardButton content="Paciente" nameIcon="home" width={CARD_WIDTH} />
        <CardButton content="Paciente" nameIcon="profile" width={CARD_WIDTH} />
        <CardButton
          content="Paciente"
          nameIcon="arrowLeft"
          width={CARD_WIDTH}
        />
      </Box>
    )
}