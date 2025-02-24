//*Nota: Cuando es archivo el import no va entre parentesis, solo cuando una función es heredera de React
import React from "react";
import {View, Text, StyleSheet, Image, ActivityIndicator, Button} from "react-native";
import { useUserViewModel } from "../viewmodels/UserViewModel";
const iconWhatsapp = require("../../../assets/icons/iconWhatsapp.png"); //Se importa la imagen de Whatsapp
const imgProfile = require("../../../assets/img/ract_perfile.png");

export const ProfileScreen: React.FC = () => {
    const { user, loading } = useUserViewModel(); 

    // Aquí se puede mostrar la información del usuario.
    return (
        <>
            <View style={styles.headerProfile}>
                <Button title="Editar Perfil" onPress={() => console.log("Editando perfil...")} />
            </View>
            <View style={styles.container}>

                {loading ? (
                    <ActivityIndicator size='large' color='#0000ff' /> //Animación del tiempo de espera
                ): user ? (
                    <> 
                        <Image source={imgProfile} style={styles.imgProfile} />
                        <Text style={styles.profileText}>{user?.name}</Text>
                        <Text style={styles.profileText}>{user?.email}</Text>
                        <View style={styles.phoneContainer}>
                            <Image source={iconWhatsapp} style={styles.whatSappIcon} />
                            <Text style={styles.profileTextWS}>{user?.phone}</Text>
                        </View>
                        <View style={styles.containerCountry}>
                            <Text style={styles.profileCountry}>{user?.city}</Text>
                            <Text style={styles.lineCountry}></Text>
                            <Text style={styles.profileCountry}>{user?.state}</Text>
                        </View>
                    </>
                ): (
                    <Text style={styles.errorUser}>Error al cargar el perfil</Text>
                )}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    headerProfile:{
        alignItems:'flex-start',
        margin:25,
        textTransform:'none',
    },

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: "#f1f1f1",
    },
    imgProfile:{
        width: 150,
        height: 150,
        borderWidth: 2,
        borderRadius: 80,
        borderColor: 'red',
        objectFit: 'contain',
    },
    profileText:{
        padding: 12,
        margin: 0,
        fontSize: 22,
    },
    phoneContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    whatSappIcon:{
        height:40,
        width: 40,
    },
    profileTextWS:{
        fontSize: 20,
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
        marginTop: 3,
        backgroundColor: '#ff7878',
    },
    errorUser: {
        textAlign: 'center',
        fontSize: 26,
        color:'red',
    },
});

export default ProfileScreen;