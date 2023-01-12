import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";

export default function Inicio({ navigation }) {
  return (
    <View style={styles.Inicio}>
      <ImageBackground
        style={styles.image}
        source={require("../Images/LOGO.png")}
      />

      <View style={styles.ButtonsView}>
        <TouchableOpacity
          title="Ambiente de prueba"
          onPress={() => navigation.navigate("Prueba")}
          style={styles.PruebaStyle}
        >
          <Text style={styles.Text}>Ambiente de prueba</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title="Ambiente de Produccion"
          onPress={() => navigation.navigate("Produccion")}
          style={styles.ProduccionStyle}
        >
          <Text style={styles.Text}>Ambiente de Produccion </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Inicio: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  ButtonsView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 50,
  },

  PruebaStyle: {
    borderRadius: 25,
    backgroundColor: "#a20b35",
    margin: 25,
    height: 60,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  ProduccionStyle: {
    borderRadius: 25,
    backgroundColor: "#cfad67",
    margin: 25,
    height: 60,
    width: 360,
    justifyContent: "center",
    alignItems: "center",
  },

  Text: {
    fontSize: 30,
    fontWeight: "bold",
  },

  image: {
    height: 250,
    width: 250,
    alignSelf: "center",
    top: 150,
  },
});
