import * as React from "react";
import { WebView } from "react-native-webview";
import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <>
      <View style={styles.textView}>
        <Text style={styles.Text}>
          USTED ESTA TRABANDO EN UN AMBIENTE DE PRUEBAS
        </Text>
      </View>
      <WebView
        style={styles.container}
        source={{ uri: "http://192.168.2.11:81/login" }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textView: {
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    backgroundColor: "#A20B35",
  },

  Text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#EED4AA",
    top: 35,
  },
});
