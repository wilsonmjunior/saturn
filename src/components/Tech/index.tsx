import { Image, type ImageProps } from 'react-native'

import { stylesheet } from './styles'

import { useStyles } from '@/config/unistyles'

type TechProps = ImageProps

export function Tech ({ ...props }: TechProps) {
  const { styles } = useStyles(stylesheet)

  return (
    <Image style={styles.container} resizeMode='contain' {...props} />
  )
}
