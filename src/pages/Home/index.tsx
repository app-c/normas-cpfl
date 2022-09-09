/* eslint-disable camelcase */
import React from 'react';
import {
   NativeBaseProvider,
   Text,
   Box,
   Center,
   Input,
   VStack,
   FlatList,
} from 'native-base';
import { Modal } from 'react-native';
import Pdf from 'react-native-pdf';
import { ClosedModa, Container, PdfView, Title } from './styles';
import { theme } from '../../global/theme';

import { ged } from '../../utils/Ged';
import { BoxGed } from '../../componets/BoxGed';
import { PdfTest } from '../Teste';

export function Home() {
   /* eslint-disable camelcase */

   //* *.................................................................... */
   const [search, setSearch] = React.useState('');
   const [modal, setModal] = React.useState(false);
   const [select, setSelect] = React.useState({
      page: 1,
      Uri: {
         uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
         cache: true,
      },
   });

   const source = {
      page: 1,
      Uri: {
         uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
         cache: true,
      },
   };

   const Ged =
      search.length > 0
         ? ged.filter(h => {
              return h.name.includes(search);
           })
         : [];

   const Select = React.useCallback((page: number, uri: string) => {
      setSelect({
         page,
         Uri: {
            uri,
            cache: true,
         },
      });
      setModal(true);
   }, []);

   return (
      <Container>
         <Modal visible={modal} animationType="fade">
            <ClosedModa onPress={() => setModal(false)}>
               <Text>FECHAR</Text>
            </ClosedModa>
            <PdfTest uri={select.Uri.uri} page={select.page} />
            {/* <PdfView
               trustAllCerts={false}
               source={select.Uri.uri}
               // onLoadComplete={(numberOfPages, filePath) => {
               //    console.log(`Number of pages: ${numberOfPages}`);
               // }}
               // onPageChanged={(page, numberOfPages) => {
               //    console.log(`Current page: ${page}`);
               // }}
               // onError={error => {
               //    console.log(error);
               // }}
               // onPressLink={uri => {
               //    console.log(`Link pressed: ${uri}`);
               // }}
               style={{ width: '100%', height: '100%' }}
               page={select.page}
            /> */}
         </Modal>

         <Center>
            <Title>PADRÕES TECNICOS CPFL</Title>
         </Center>

         <Text mt="10" color={theme.colors.text.solid}>
            PESQUISAR
         </Text>

         <Input
            focusOutlineColor={theme.colors.primary.solid}
            backgroundColor={theme.colors.text.transparent}
            _input={{
               color: theme.colors.text.solid,
               ml: 5,
            }}
            mt="2"
            onChangeText={h => setSearch(h)}
            autoCapitalize="characters"
            selectionColor={theme.colors.text.solid}
         />

         <Box mt="10">
            {search.length > 0 ? (
               <VStack>
                  <FlatList
                     contentContainerStyle={{
                        paddingBottom: 200,
                     }}
                     data={Ged}
                     renderItem={({ item: h }) => (
                        <>
                           <BoxGed
                              title={h.title}
                              item={h.name}
                              pres={() => Select(h.page, h.uri)}
                              color={h.color}
                           />
                        </>
                     )}
                  />
               </VStack>
            ) : (
               <VStack space="2">
                  <FlatList
                     contentContainerStyle={{
                        paddingBottom: 200,
                     }}
                     data={ged}
                     renderItem={({ item: h }) => (
                        <>
                           <BoxGed
                              title={h.title}
                              item={h.name}
                              pres={() => Select(h.page, h.uri)}
                              color={h.color}
                           />
                        </>
                     )}
                  />
               </VStack>
            )}
         </Box>
      </Container>
   );
}
