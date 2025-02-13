//Configuración de la navegación 
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
//*Nota: Cuando es archivo el import no va entre parentesis, solo cuando sea una función hereda de una función en React
import  WelcomeScreen  from "../../presentation/screens/WelcomeScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: "Bienvenido" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;