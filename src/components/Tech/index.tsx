import { Image, ImageProps } from 'react-native'

import { useStyles } from '@/config/unistyles';

import { stylesheet } from './styles';

type TechProps = ImageProps;

export function Tech({ ...props }: TechProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <Image style={styles.container} resizeMode='contain' {...props} />
  )
}
