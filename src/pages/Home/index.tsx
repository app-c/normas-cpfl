/* eslint-disable camelcase */
import React from 'react';
import {
   Text,
   Box,
   Center,
   Input,
   VStack,
   FlatList,
   HStack,
   Image,
} from 'native-base';
import { Dimensions, Modal } from 'react-native';
import { ClosedModa, Container, Title } from './styles';
import { theme } from '../../global/theme';

import { ged } from '../../utils/Ged';
import { BoxGed } from '../../componets/BoxGed';
import { PdfTest } from '../Teste';
import logo from '../../../assets/logo.png';

export function Home() {
   /* eslint-disable camelcase */

   const w = Dimensions.get('window').width;

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

   const Ged =
      search.length > 0
         ? ged.filter(h => {
              const up = h.name.toLocaleUpperCase();
              return up.includes(search);
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
         </Modal>

         <VStack mt="-8">
            <Center>
               <Image
                  resizeMode="contain"
                  w={w * 0.3}
                  h={w * 0.3}
                  source={logo}
                  ml="5"
                  top="0"
                  alt="image"
               />
            </Center>
            <Center mt="-8">
               <Title style={{ textAlign: 'center' }}>
                  GESTÃO ELETRÔNICA DE DOCUMENTOS
               </Title>
            </Center>
         </VStack>

         <Text mt="5" color={theme.colors.text.solid}>
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
