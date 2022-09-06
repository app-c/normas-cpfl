import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';
import pdf from '../../../PDFS/Carregamento,_Movimentação_e_Transporte_de_Postes_no_CCM_CPFL_Serviços.pdf';

export function PdfTest() {
   const source = {
      uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
      cache: true,
   };
   const ts = { uri: pdf, cache: true };
   return (
      <View style={styles.container}>
         <Pdf
            trustAllCerts={false}
            source={pdf}
            onLoadComplete={(numberOfPages, filePath) => {
               console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
               console.log(`Current page: ${page}`);
            }}
            onError={error => {
               console.log(error);
            }}
            onPressLink={uri => {
               console.log(`Link pressed: ${uri}`);
            }}
            style={styles.pdf}
         />
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
