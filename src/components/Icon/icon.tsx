import {useAppTheme} from '@hooks';
import {ThemeColor} from '@theme';
import {Pressable} from 'react-native';
import { ArrowLeftIcon } from '../../assets/icons/ArrowLeftIcon';
import { HomeIcon } from '../../assets/icons/HomeIcon';
import { HomeFillIcon } from '../../assets/icons/HomeFillIcon';
import { BellIcon } from '../../assets/icons/BellIcon';
import { BellOnIcon } from '../../assets/icons/BellOnIcon';
import { ProfileFillIcon } from '../../assets/icons/ProfileFillIcon';
import { ProfileIcon } from '../../assets/icons/ProfileIcon';
import { AssignmentIcon } from '../../assets/icons/AssignmentIcon';
import { ScienceIcon } from '../../assets/icons/Science';
import { CalendarIcon } from '../../assets/icons/Calendar';


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
  bellIcon: BellIcon,
  bellOnIcon: BellOnIcon,
  profileFill:ProfileFillIcon,
  profile:ProfileIcon,
  assignment:AssignmentIcon,
  science:ScienceIcon,
  calendar:CalendarIcon

};

export type IconTypes = typeof IconResgistry;
export type IconNames = keyof IconTypes;
