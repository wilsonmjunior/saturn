
import { Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export type IconType = 'Feather' | 'MaterialIcons' | 'MaterialCommunityIcons';

interface IconProps {
  name: any;
  type?: IconType;
  size?: number;
  color?: string;
}

export function Icon({ name, type = 'Feather', size = 24, color = '#ffffff' }: IconProps) {
  switch (type) {
    case 'MaterialIcons':
      return <MaterialIcons name={name} size={size} color={color} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons name={name} size={size} color={color} />;
    default:
      return <Feather name={name} size={size} color={color} />; 
  }
};
