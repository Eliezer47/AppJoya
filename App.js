import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Importar Pantallas

import Inicio from "./src/Screens/Inicio";
import AmbienteProduccion from "./src/Screens/AmbienteProduccion";
import AmbientePrueba from "./src/Screens/AmbientePrueba";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="inicio">
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Prueba"
          component={AmbientePrueba}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Produccion"
          component={AmbienteProduccion}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
