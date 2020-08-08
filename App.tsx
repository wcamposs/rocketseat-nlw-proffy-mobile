import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { AppLoading } from 'expo';
import AppStack from './src/routes/AppStack';

import { useFonts, Archivo_400Regular, Archivo_700Bold } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';


export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Fragment>
        <StatusBar style="light" />
      
        <AppStack />
      </Fragment>
    );
  }
}
