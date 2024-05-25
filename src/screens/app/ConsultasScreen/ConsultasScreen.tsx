import { Box, Screen, Text } from "@components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { AppStackParamList } from "src/routes/AppStack";

type ScreenProps = NativeStackScreenProps<AppStackParamList,'Consultas'>;
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