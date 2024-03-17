import { Feather } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View, Pressable } from "react-native";

import { stylesheet } from "./styles";

import { useStyles } from "@/config/unistyles";

type RouteProps = {
  key: string;
  name: string;
};

function TabBarIcon({ icon, color }) {
  const iconName = {
    home: "home",
    offers: "folder",
    profile: "user",
    negotiations: "list",
  };

  return <Feather size={20} name={iconName[icon]} color={color} />;
}

export const TabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route: RouteProps, index: number) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View
            key={index}
            style={[
              styles.mainItemContainer,
              { borderRightWidth: route.name === "negotiations" ? 3 : 0 },
            ]}
          >
            <Pressable
              onPress={onPress}
              style={{
                backgroundColor: isFocused
                  ? options.tabBarActiveBackgroundColor
                  : "transparent",
                borderRadius: 20,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  padding: 15,
                }}
              >
                <TabBarIcon
                  icon={route.name}
                  color={
                    !isFocused
                      ? options.tabBarInactiveTintColor
                      : options.tabBarActiveTintColor
                  }
                />
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};
