import * as React from "react";
import react, { useState } from "react";
import { WebView } from "react-native-webview";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  ImageBackground,
} from "react-native";
import Constants from "expo-constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Foundation } from "@expo/vector-icons";

export default function App() {
  const [visible, setVisible] = useState(true);

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
        onLoadEnd={() => setVisible(false)}
        size={"large"}
        scalesPageToFit={true}
        renderError={() => {
          return (
            <View
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBackground
                style={styles.image}
                source={require("../Images/LOGO.png")}
              />
              <Text
                style={{
                  color: "black",
                  justifyContent: "center",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 32,
                }}
              >
                Error al cargar la aplicacion
              </Text>
              <Text
                style={{
                  color: "black",
                  justifyContent: "center",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 32,
                  margin: 10,
                }}
              >
                Porfavor conectese a una red de Joya de Nicaragua o Habilite la
                VPN
              </Text>
            </View>
          );
        }}
      />

      {visible && (
        <ActivityIndicator color={"red"} style={styles.ActivityIndicator} />
      )}
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

  ActivityIndicator: {
    position: "absolute",
    top: Dimensions.get("screen").height / 2,
    left: Dimensions.get("screen").width / 2.1,
  },
});
