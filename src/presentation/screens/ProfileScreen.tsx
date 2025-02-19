//*Nota: Cuando es archivo el import no va entre parentesis, solo cuando una función es heredera de React
import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import { useUserViewModel } from "../viewmodels/UserViewModel";
import icon from "./assets/icons/iconWhatsapp.png"; //Se importa la imagen de Whatsapp

const ProfileScreen = () => {
    const { user } = useUserViewModel(); 
    
    // Aquí se puede mostrar la información del usuario.
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.profileText}>{user?.name}</Text>
                <Text style={styles.profileText}>{user?.email}</Text>
                <View style={styles.phoneContainer}>
                    <Image source={icon} style={styles.whatSappIcon} />
                    <Text style={styles.profileText}>{user?.phone}</Text>
                </View>
                <View style={styles.containerCountry}>
                    <Text style={styles.profileCountry}>{user?.city}</Text>
                    <Text style={styles.lineCountry}></Text>
                    <Text style={styles.profileCountry}>{user?.state}</Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f1f1f1",
    },
    profileText:{
        padding: 12,
        margin: 0,
        fontSize: 22,
    },
    phoneContainer:{

    },
    whatSappIcon:{

    },
    containerCountry: {
        flexDirection: 'row',
        gap: 0,
        alignItems: 'center',
    },
    profileCountry: {
        fontSize: 18,
        padding: 8,
    },
    lineCountry: {
        width: 18,
        height: 3.5,
        backgroundColor: '#ff7878',
    },
});

export default ProfileScreen;