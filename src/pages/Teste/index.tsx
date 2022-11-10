import { Box, Button, Center } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

interface Props {
   source: {
      uri: string;
   };
   page: number;
}
export function PdfTest(uri: string) {
   const link =
      'https://firebasestorage.googleapis.com/v0/b/ged-cpfl.appspot.com/o/pdf%2Fpadrao%2FRamal%20de%20Liga%C3%A7%C3%A3o%20-%20Montagem.pdf?alt=media&token=19ad891f-7298-4fcd-86ae-ce5d959ccec4';
   const source = {
      uri: link,
      cache: true,
   };

   return (
      <Pdf
         trustAllCerts={false}
         source={source}
         onLoadComplete={(numberOfPages, filePath) => {}}
         onPageChanged={(page, numberOfPages) => {}}
         onError={error => {}}
         onPressLink={uri => {}}
         page={1}
         style={styles.pdf}
      />
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
   },
   pdf: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
   },
});
