import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { Redirect, Tabs } from 'expo-router';
import { UnistylesTheme } from 'react-native-unistyles'

import { Loading } from '@/components/common/Loading';
import { theme } from '@/config/unistyles'
import { useSession } from '@/hooks/auth';

export default function TabsLayout () {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return (
      <View 
        style={{ 
          flex: 1, 
          alignItems: 'center', 
          justifyContent: 'center', 
        }}
      >
        <Loading />
      </View>
    );
  }

  if (!session) {
    return <Redirect href="/home" />;
  }

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
