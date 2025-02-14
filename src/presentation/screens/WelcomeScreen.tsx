//Vista o pantalla de Bienvenida al usuario en React
//*Nota: Cuando es archivo el import no va entre parentesis, solo cuando sea una función hereda de una función en React
import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useUserViewModel } from "../UserViewModel";

export const WelcomeScreen: React.FC = () => {
    const { user, loading } = useUserViewModel();

    return (
        <View style={styles.container}>
            { loading ? (
                <ActivityIndicator size="large" color="#0000ff" /> //Animacion de carga o tiempo de espera
            ) : user ? (
                <>
                <Text style={styles.welcomeText}>¡Bienvenido a React Native!</Text>
                <Text style={styles.userName}>{user.name} ❤️</Text>
                </>
            ): (
                <Text style={styles.errorUser}>Error al obtener el usuario</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
    },
    welcomeText: {
        textAlign: 'center',
        fontSize: 26,
    },
    userName: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
    },
    errorUser:{
        textAlign: 'center',
        fontSize: 26,
        color:'red'
    }
});

export default WelcomeScreen;