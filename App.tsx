import { StatusBar } from "expo-status-bar";
import { FC, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./src/pages/home";

const SplashScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainHeading}>
        <Text
          style={{
            padding: 20,
            backgroundColor: "black",
            color: "white",
            fontSize: 25,
            fontWeight: '500',
            borderRadius: 10,
          }}
        >
          TODO LIST
        </Text>
      </View>

      <View style={styles.footerView}>
        <Text style={{ fontSize: 12, fontWeight: '500' }}>MADE WITH ❤️</Text>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const App: FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Change screen after 3 seconds
  }, []);

   return showSplash ? <SplashScreen /> : <Home/>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  mainHeading: {
    flex: 1,
    justifyContent: "flex-end",
    // paddingTop: 100
  },

  footerView: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 10,
  },

});

export default App;
