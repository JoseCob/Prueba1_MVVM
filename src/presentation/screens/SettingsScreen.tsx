import React from "react";
import {View, Text, StyleSheet} from "react-native";

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <>
                <Text style={styles.settingsText}>Esta es una página de Configuración de la APP</Text>
            </>
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container:{
        padding: 10,
    },
    settingsText:{
        padding: 20,
    }
});