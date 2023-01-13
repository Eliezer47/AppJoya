import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Inicio({ navigation }) {
  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={[
        "#cfad67",
        "#C8925F",
        "#C07756",
        "#B95C4E",
        "#B14146",
        "#AA263D",
        "#A20B35",
      ]}
      start={{ x: 1, y: 0.5 }}
      end={{ x: 1, y: 0.8 }}
    >
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
            <Text style={styles.Text}>AMBIENTE DE PRUEBA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            title="Ambiente de Produccion"
            onPress={() => navigation.navigate("Produccion")}
            style={styles.ProduccionStyle}
          >
            <Text style={styles.Text}>PRODUCCION </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  Inicio: {
    flex: 1,
  },

  ButtonsView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 50,
  },

  PruebaStyle: {
    borderRadius: 10,
    backgroundColor: "#a20b35",
    bottom: 100,
    margin: 25,
    height: 60,
    width: 350,
    justifyContent: "center",
    alignItems: "center",

    // Sombras
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  ProduccionStyle: {
    borderRadius: 10,
    backgroundColor: "#cfad67",
    bottom: 80,
    margin: 25,
    height: 60,
    width: 300,
    justifyContent: "center",
    alignItems: "center",

    //Sombra
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  Text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },

  image: {
    height: 250,
    width: 250,
    alignSelf: "center",
    top: 100,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
