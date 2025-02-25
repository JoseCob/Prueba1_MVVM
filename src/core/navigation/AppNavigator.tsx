//Configuración de la navegación 
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//*Nota: Cuando es archivo el import no va entre parentesis, solo cuando una función es heredera de React
import ProfileScreen from "../../presentation/screens/ProfileScreen"; 
import WelcomeScreen from "../../presentation/screens/WelcomeScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" options={{ title: "Inicio" }} component={WelcomeScreen} />
                <Tab.Screen name="Profile" options={{title: "Perfil" }} component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default TabNavigator;