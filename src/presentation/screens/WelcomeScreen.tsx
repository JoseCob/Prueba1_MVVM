//Vista o pantalla de Bienvenida al usuario en React
//*Nota: Cuando es archivo el import no va entre parentesis, solo cuando una función es heredera de React
import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useUserViewModel } from "../viewmodels/UserViewModel";

export const WelcomeScreen: React.FC = () => {
    const { user, loading } = useUserViewModel();

    //Aqui muestra el estado de carga y el nombre del usuario en la página principal "Home"
    return (
        <View style={styles.container}>
            { loading ? (
                <ActivityIndicator size="large" color="#0000ff" /> //Animación de carga o tiempo de espera
            ) : user ? (
                <>
                <Text style={styles.welcomeText}>¡Bienvenido a React Native!</Text>
                <Text style={styles.userName}>{user.user} ❤️</Text>
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
        backgroundColor: "#f1f1f1",
    },
    welcomeText: {
        textAlign: 'center',
        fontSize: 26,
        marginBottom: 20,
    },
    userName: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
    },
    errorUser:{
        textAlign: 'center',
        fontSize: 26,
        color:'red',
    },
});

export default WelcomeScreen;