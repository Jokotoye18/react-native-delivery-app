import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import SplashScreen from "./components/screens/spash-screen/Index";
import { NavigationContainer } from "@react-navigation/native";
import { MainTabNav } from "./navigators/MainTabNav";
import { colors } from "./utils/colors";
import { ItemProvider } from "./context/ItemContext";

export default function App() {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppLoading(false);
    }, 5000);
  }, []);

  if (appLoading) {
    return <SplashScreen />;
  }

  return (
    <>
      <StatusBar animated={true} backgroundColor={colors.TextPrimary} />
      <ItemProvider>
        <NavigationContainer>
          <MainTabNav />
        </NavigationContainer>
      </ItemProvider>
    </>
  );
}
