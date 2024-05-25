import React from "react";
import { Box, Screen, Text } from "@components";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { AppStackParamList } from "src/routes/AppStack";

type ScreenProps = NativeStackScreenProps<AppStackParamList,'HomeScreen'>
export function HomeScreen({navigation}:ScreenProps){
    return(
        <Screen>
            <Box>
                <Text>Olá, Diego</Text>
                <Text>Prontuário: 14438232</Text>
            </Box>
        </Screen>
    )
}