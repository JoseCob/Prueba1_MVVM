//Configuración de la navegación 
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//*Nota: Cuando es archivo el import no va entre parentesis, solo cuando sea una función hereda de una función en React
import SettingsScreen from "../../presentation/screens/SettingsScreen"; 
import WelcomeScreen from "../../presentation/screens/WelcomeScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" options={{ title: "Inicio" }} component={WelcomeScreen} />
                <Tab.Screen name="Settings" options={{title: "Configuración" }} component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default TabNavigator;