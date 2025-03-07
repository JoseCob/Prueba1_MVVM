//*Nota: Cuando es archivo el import no va entre parentesis, solo cuando sea una función hereda de una función en React
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import AppNavigator from "./src/core/navigation/AppNavigator";

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'default'}/>
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;