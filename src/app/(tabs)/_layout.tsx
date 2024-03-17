import { Redirect, Tabs } from "expo-router";
import { View } from "react-native";
import { UnistylesTheme } from "react-native-unistyles";

import { Loading } from "@/components/common/Loading";
import { TabBar } from "@/components/common/TabBar";
import { theme } from "@/config/unistyles";
import { useSession } from "@/hooks/auth";

export default function TabsLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loading />
      </View>
    );
  }

  if (!session) {
    return <Redirect href="/" />;
  }

  return (
    <UnistylesTheme theme={theme}>
      <Tabs
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.white,
            tabBarActiveBackgroundColor: "#030D16",
          }}
        />
        <Tabs.Screen
          name="offers"
          options={{
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.white,
            tabBarActiveBackgroundColor: "#030D16",
          }}
        />
        <Tabs.Screen
          name="negotiations"
          options={{
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.white,
            tabBarActiveBackgroundColor: "#030D16",
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.white,
            tabBarActiveBackgroundColor: "#030D16",
          }}
        />
      </Tabs>
    </UnistylesTheme>
  );
}
