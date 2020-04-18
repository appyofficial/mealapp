import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CategoriesScreen } from "./screens";
import * as Font from "expo-font";
import { AppLoading } from "expo";

//fetching fonts
const fetchFonts = () => {
  return Font.loadAsync({
    roboto: "./assets/fonts/Roboto-Regular.ttf",
    "roboto-bold": "./assets/fonts/Roboto-Bold.ttf",
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <View style={styles.container}>
      <CategoriesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
