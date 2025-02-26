import {Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

//Aqui se importan los iconos personalizados para la navegacion bottom-tabs
const tabIcons: Record<string, {active: ImageSourcePropType; inactive: ImageSourcePropType}> = {
    //Se pasa el name del Tab.Screen de Tab.Navigator
    Home: {active: require("../../../assets/icons/home.png"), inactive: require("../../../assets/icons/home.png") },
    Profile: {active: require("../../../assets/icons/profile.png"), inactive: require("../../../assets/icons/profile.png")},
};

const tabOptions = (route:any): BottomTabNavigationOptions => ({
    tabBarIcon: ({focused}) => {
        const icon = tabIcons[route.name]; //El name se toma del Tab.Screen
        return <Image source={focused ? icon.active : icon.inactive} style={styles.customTabsNav}/>
    },
    tabBarActiveTintColor: "white", //Muestra un color al texto cuando esta activo el Tab.Navigator
    tabBarInactiveTintColor: "#000", //Muestra un color al texto cuando esta inactivo el Tab.Navigator 
    tabBarStyle: {backgroundColor: "#004dff", height: 65}, //Pinta el color de fondo del Tab.Navigator
    tabBarLabelStyle: {fontSize:14},
    //Aqui se personaliza el header del Tab.Navigator
    headerShown: true, //Muestra el encabezado de la navegación
    headerStyle: {backgroundColor: '#004dff'}, //Cambia el color de fondo del header
    headerTintColor: "white", //Cambia el color del texto en el header
    headerTitleStyle: {fontSize: 25, fontWeight: 'bold'}

});

const styles = StyleSheet.create({
    customTabsNav: {
        width: 20,
        height: 20,
    },
});

export default tabOptions;