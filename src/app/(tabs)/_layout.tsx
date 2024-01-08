import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { UnistylesTheme } from 'react-native-unistyles'

import { theme } from '@/config/unistyles'

export default function TabsLayout () {
  return (
    <UnistylesTheme theme={theme}>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Inicio',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome
                size={size}
                name="home"
                color={color}
              />
            )
          }}
        />
        <Tabs.Screen
          name="offers"
          options={{
            title: 'Ofertas',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome
                size={size}
                name="cart-arrow-down"
                color={color}
              />
            )
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome
                size={size}
                name="user"
                color={color}
              />
            )
          }}
        />
      </Tabs>
    </UnistylesTheme>
  )
}
