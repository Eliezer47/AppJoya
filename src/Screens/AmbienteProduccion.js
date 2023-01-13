import * as React from "react";
import { WebView } from "react-native-webview";
import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Foundation } from "@expo/vector-icons";

export default function App() {
  return (
    <>
      <View style={styles.textView}>
        <Text style={styles.Text}>
          <Foundation name="alert" size={30} color="yellow" />
          USTED ESTA TRABANDO EN UN AMBIENTE DE{" "}
          <Text style={styles.Text2}>
            PRODUCCION ¡CUIDADO!
            <Foundation name="alert" size={30} color="yellow" />
          </Text>
        </Text>
      </View>
      <WebView
        style={styles.container}
        source={{ uri: "http://192.168.2.102:81/login" }}
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
    top: 30,
  },
  Text2: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "yellow",
    bottom: 25,
  },
});
