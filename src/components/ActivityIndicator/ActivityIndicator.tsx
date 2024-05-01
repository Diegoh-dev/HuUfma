import { useTheme } from "@shopify/restyle";
import { Theme, ThemeColor } from "@theme";
import React from "react";
import {ActivityIndicator as RNActivityIndicator} from 'react-native';
import { useAppTheme } from "src/Hooks/useAppTheme";

interface Props {
    color:ThemeColor;
}
export function ActivityIndicator({color}:Props){
    const {colors} = useAppTheme();
    return <RNActivityIndicator color={colors[color]}/>
}