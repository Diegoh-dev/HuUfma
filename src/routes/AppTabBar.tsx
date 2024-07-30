import React from 'react';
import {Box, BoxProps, Icon, Text, TextProps, TouchableOpacityBox, TouchableOpacityBoxProps} from '@components';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {mapScreenToProps} from './MapScreenToProps';
import {AppTabBottomTabParamlist} from './AppTabNavigation';
import { useAppSafeArea } from '@hooks';
import {$shadowProps} from '@theme';

// COSTUMIZAÇÃO DA BOTTOMTAB
export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea();

  return (
    <Box style={[{paddingBottom: bottom,paddingHorizontal:10}, $shadowProps]} {...$boxWrapper} flexDirection="row">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const tabIcon =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamlist];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            key={index}
            {...$itemWrapper}
            activeOpacity={1}
            alignItems="center"
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            // style={{flex: 1}}
            style={{flex: !isFocused ? 1 : undefined, width: isFocused ? 80 : 'auto',paddingTop:4,paddingBottom:4}}
            backgroundColor={isFocused ? 'primary' : 'grayWhite'}
            borderRadius={isFocused ? 's20' : undefined}>
            <Icon
              name={isFocused ? tabIcon.icon.focused : tabIcon.icon.unfocuses}
              color={isFocused ? 'background' : 'primary'}
            />
            <Text
              {...$label}
              preset="paragraphCaption"
              style={{color: isFocused ? '#fff' : '#673ab7'}}>
              {tabIcon.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

const $label: TextProps = {
    semiBold: true,
    marginTop: 's4',
    preset: 'paragraphCaption',
  };
  
  const $itemWrapper: TouchableOpacityBoxProps = {
    activeOpacity: 1,
    alignItems: 'center',
    accessibilityRole: 'button',
    flex: 1,
  };
  
  const $boxWrapper: BoxProps = {
    paddingTop: 's12',
    flexDirection: 'row',
    backgroundColor: 'background',
  };