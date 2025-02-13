//Configuración de la navegación 
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//*Nota: Cuando es archivo el import no va entre parentesis, solo cuando sea una función hereda de una función en React
import SettingsScreen from "../../presentation/screens/SettingsScreen"; 
import WelcomeScreen from "../../presentation/screens/WelcomeScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: "Bienvenido" }} />
                </Stack.Navigator>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={WelcomeScreen} />
                    <Tab.Screen name="Settings" component={SettingsScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
};

export default AppNavigator;