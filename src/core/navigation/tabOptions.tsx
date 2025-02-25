import react from "react";
import {Image, ImageSourcePropType } from 'react-native';
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

//Aqui se importan los iconos personalizados para la navegacion bottom-tabs
const tabIcons: Record<string, {active: ImageSourcePropType; inactive: ImageSourcePropType}> = {
Home: {active: require(""), inactive: require("") },
Profile: {active: require(""), inactive: require("")},
};