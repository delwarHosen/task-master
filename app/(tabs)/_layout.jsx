import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
    const insets = useSafeAreaInsets();

    const renderIcon = (name) => ({ focused }) => {
        const translateY = useRef(new Animated.Value(0)).current;

        useEffect(() => {
            Animated.spring(translateY, {
                toValue: focused ? -8 : 0,
                useNativeDriver: true,
                stiffness: 120,
                damping: 12,
            }).start();
        }, [focused]);

        return (
            <Animated.View
                style={{
                    transform: [{ translateY }],
                }}
            >
                <View
                    style={{
                        height: 52,
                        width: 52,
                        borderRadius: 100,
                        marginTop:11,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: focused ? "#84C000" : "transparent",

                        shadowColor: "#D4D4D4",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: focused ? 1 : 0,
                        shadowRadius: 20,
                        elevation: focused ? 6 : 0,
                    }}
                >
                    <Ionicons
                        name={name}
                         size={focused ? 24 : 30}
                        color={focused ? "#FFFFFF" : "#000000"}
                    />
                </View>
            </Animated.View>
        );
    };

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60 + insets.bottom,
                    paddingBottom: insets.bottom,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{ tabBarIcon: renderIcon("home-outline") }}
            />
            <Tabs.Screen
                name="addTask"
                options={{ tabBarIcon: renderIcon("add") }}
            />
            <Tabs.Screen
                name="profile"
                options={{ tabBarIcon: renderIcon("person-circle-outline") }}
            />
        </Tabs>
    );
}
