import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AmbientePrueba() {
  return (
    <View style={styles.Container}>
      <Text>USTED ESTA EN EL AMBIENTE DE PRUEBAS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});
