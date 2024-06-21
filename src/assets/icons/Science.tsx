import React from 'react';

import {Svg, Path,Rect,G} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function ScienceIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg
      enable-background="new 0 0 24 24"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill={color}>
      <G>
        <Rect fill="none" height="24" width="24" />
      </G>
      <G>
        <Path d="M19.8,18.4L14,10.67V6.5l1.35-1.69C15.61,4.48,15.38,4,14.96,4H9.04C8.62,4,8.39,4.48,8.65,4.81L10,6.5v4.17L4.2,18.4 C3.71,19.06,4.18,20,5,20h14C19.82,20,20.29,19.06,19.8,18.4z" />
      </G>
    </Svg>
  );
}
