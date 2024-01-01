import React from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';

import { Button } from '@/components/Button';

export default function Offers() {
  const { push } = useRouter();

  return (
    <View 
      style={{ 
        flex: 1,
        backgroundColor: "#33333320",
      }}
    >
      <Text>Ofertas</Text>
      <Button
        title="Go Details" 
        onPress={() => push('/offers/detail')} 
        style={{ marginTop: 16 }} 
      />
    </View>
  );
};
