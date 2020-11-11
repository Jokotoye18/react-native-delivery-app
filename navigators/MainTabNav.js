import React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "./home/Index";
import Cart from "./cart/Index";
import User from "./user/Index";

const MainBottomTab = createMaterialBottomTabNavigator();

export const MainTabNav = () => {
  return (
    <MainBottomTab.Navigator
      labeled={false}
      barStyle={{
        backgroundColor: "#F8F8F8",
      }}
      activeColor="#7203FF"
    >
      <MainBottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <MainBottomTab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "cart" : "cart-outline"}
              color={color}
              size={26}
            />
          ),
          tabBarBadge: 8,
          tabBarColor: "blue",
        }}
      />
      <MainBottomTab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "account" : "account-outline"}
              color={color}
              size={26}
            />
          ),
        }}
      />
    </MainBottomTab.Navigator>
  );
};

export default MainTabNav;
