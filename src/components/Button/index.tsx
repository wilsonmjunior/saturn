import { forwardRef } from 'react';
import { Text } from 'react-native';
import { RectButton, type RectButtonProps } from 'react-native-gesture-handler';

import { stylesheet } from './styles';

import { useStyles } from '@/config/unistyles';

type ButtonProps = RectButtonProps & {
  title: string;
  variant?: 'base' | 'outline';
};

export const Button = forwardRef(({ title, variant = 'base', ...othersProps }: ButtonProps, ref?: any) => {
  const { styles, theme: { components } } = useStyles(stylesheet)

  return (
    <RectButton
      style={[styles.container, components?.button[variant]]}
      ref={ref}
      {...othersProps}
    >
      <Text style={[styles.text, components?.buttonText[variant]]}>
        {title}
      </Text>
    </RectButton>
  )
});

Button.displayName = 'Button';
