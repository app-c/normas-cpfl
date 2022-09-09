import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';
import pdf from '../../../PDFS/Carregamento,_Movimentação_e_Transporte_de_Postes_no_CCM_CPFL_Serviços.pdf';

interface Props {
   uri: string;
   page: number;
}
export function PdfTest({ uri, page }: Props) {
   const source = {
      uri,
      cache: true,
   };

   console.log(page);

   return (
      <View style={styles.container}>
         {typeof uri === 'number' ? (
            <Pdf
               trustAllCerts={false}
               source={source.uri}
               onLoadComplete={(numberOfPages, filePath) => {}}
               onPageChanged={(page, numberOfPages) => {}}
               onError={error => {}}
               onPressLink={uri => {}}
               page={page}
               style={styles.pdf}
            />
         ) : (
            <Pdf
               trustAllCerts={false}
               source={source}
               onLoadComplete={(numberOfPages, filePath) => {}}
               onPageChanged={(page, numberOfPages) => {}}
               onError={error => {}}
               onPressLink={uri => {}}
               style={styles.pdf}
               page={page}
            />
         )}
      </View>
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
