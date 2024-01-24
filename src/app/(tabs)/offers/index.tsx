import { Link } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

import { Button } from '@/components/Button'

export default function Offers () {
  return (
    <View style={{ flex: 1 }}>
      <Text>Ofertas</Text>

      <View style={{ flex: 1, justifyContent: 'flex-end', padding: 16 }}>
        <Link href="/offers/details" asChild>
          <Button title="Detalhes" />
        </Link>
      </View>
    </View>
  )
};
