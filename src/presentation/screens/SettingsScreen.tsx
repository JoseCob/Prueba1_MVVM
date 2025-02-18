import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { useUserViewModel } from "../viewmodels/UserViewModel";


const SettingsScreen = () => {
    const { user } = useUserViewModel(); 
    
    // Aquí se puede mostrar la información del usuario o cualquier otro contenido relacionado con la página de Configuración.
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.settingsText}>Esta es una página de Configuración de la APP</Text>
                <Text style={styles.labelPhone}>{user?.phone}</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    settingsText:{
        padding: 10,
    },
    labelPhone:{
        margin: 10,
        padding: 10,
    }
});

export default SettingsScreen;