/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/Home';
import { PdfTest } from './src/pages/Teste';

export default function App() {
   return (
      <NativeBaseProvider>
         <View style={{ flex: 1 }}>
            <StatusBar hidden style="light" />
            <Home />
            {/* <PdfTest /> */}
         </View>
      </NativeBaseProvider>
   );
}
