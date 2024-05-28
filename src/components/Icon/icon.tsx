import {useAppTheme} from '@hooks';
import {ThemeColor} from '@theme';
import {Pressable} from 'react-native';
import { ArrowLeftIcon } from '../../assets/icons/ArrowLeftIcon';
import { HomeIcon } from '../../assets/icons/HomeIcon';
import { HomeFillIcon } from '../../assets/icons/HomeFillIcon';


export interface IconBase {
  size: number;
  color: string;
}

export interface IconPros {
  name: IconNames;
  size?: number;
  color?: ThemeColor;
  onPress?: () => void;
}
export function Icon({
  name,
  color = 'backgroundContrast',
  size = 20,
  onPress,
}: IconPros) {
  const SVGIcon = IconResgistry[name];
  const {colors} = useAppTheme();
  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={20}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
}

const IconResgistry = {
  arrowLeft: ArrowLeftIcon,
  home:HomeIcon,
  homeFill:HomeFillIcon,
};

export type IconTypes = typeof IconResgistry;
export type IconNames = keyof IconTypes;
