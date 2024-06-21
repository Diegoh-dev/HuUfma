import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function CalendarIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill={color}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
    </Svg>
  );
}
