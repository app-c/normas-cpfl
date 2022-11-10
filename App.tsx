/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
   Sura_400Regular as regular,
   Sura_700Bold as bold,
   useFonts,
} from '@expo-google-fonts/sura';
import {
   Prompt_400Regular as regu,
   Prompt_900Black as dark,
} from '@expo-google-fonts/prompt';
import { Home } from './src/pages/Home';
import { PdfTest } from './src/pages/Teste';

export default function App() {
   const [appIsReady, setAppIsReady] = useState(false);

   const [loadFont] = useFonts({
      regular,
      bold,
      regu,
      dark,
   });

   useEffect(() => {
      async function prepare() {
         try {
            // Pre-load fonts, make any API calls you need to do here
            await Font.loadAsync(Entypo.font);
            // Artificially delay for two seconds to simulate a slow loading
            // experience. Please remove this if you copy and paste the code!
            await new Promise(resolve => setTimeout(resolve, 2000));
         } catch (e) {
            console.warn(e);
         } finally {
            // Tell the application to render
            setAppIsReady(true);
         }
      }

      prepare();
   }, []);

   const onLayoutRootView = useCallback(async () => {
      if (appIsReady && loadFont) {
         // This tells the splash screen to hide immediately! If we call this after
         // `setAppIsReady`, then we may see a blank screen while the app is
         // loading its initial state and rendering its first pixels. So instead,
         // we hide the splash screen once we know the root view has already
         // performed layout.
         await SplashScreen.hideAsync();
      }
   }, [appIsReady]);

   if (!appIsReady) {
      return null;
   }

   return (
      <NativeBaseProvider>
         <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <StatusBar hidden style="light" />

            <Home />
         </View>
      </NativeBaseProvider>
   );
}
