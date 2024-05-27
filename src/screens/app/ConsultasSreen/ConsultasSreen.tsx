import React from "react";
import { Box, Screen, Text } from "@components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "src/routes/AppStack";
import { RootStackTabNavigationParamList } from "src/routes/AppTabNavigation";

type ScreenProps = NativeStackScreenProps<RootStackTabNavigationParamList,'ConsultasSreen'>;
export function ConsultasSreen({navigation}:ScreenProps){
    return(
        <Screen>
            <Box>
                <Text>medical </Text>
                <Text>appointment</Text>
            </Box>
        </Screen>
    )
}