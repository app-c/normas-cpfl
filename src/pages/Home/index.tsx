/* eslint-disable camelcase */
import React, { useState } from 'react';
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

import { ged } from '../../utils/Ged/sed';
import { BoxGed } from '../../componets/BoxGed';
import { PdfTest } from '../Teste';
import logo from '../../../assets/logo.png';
import { CircleSelect } from '../../componets/circlleSelect';
import { Ser } from '../../utils/Ged/ser';
import { Set } from '../../utils/Ged/set';
import { Pd } from '../../utils/Ged/pd';

export function Home() {
   /* eslint-disable camelcase */

   const w = Dimensions.get('window').width;

   //* *.................................................................... */
   const [search, setSearch] = React.useState('');
   const [modal, setModal] = React.useState(false);
   const [selection, setSelection] = useState('sed');
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

   const ser =
      search.length > 0
         ? Ser.filter(h => {
              const up = h.name.toLocaleUpperCase();
              return up.includes(search);
           })
         : [];

   const set =
      search.length > 0
         ? Set.filter(h => {
              const up = h.name.toLocaleUpperCase();
              return up.includes(search);
           })
         : [];

   const pad =
      search.length > 0
         ? Pd.filter(h => {
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
         <Text position="absolute" left="5" color="dark.900">
            Vesion: 2.0.4
         </Text>
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

         <Center mt="4">
            <HStack space={6}>
               <CircleSelect
                  selected={selection === 'pd'}
                  select={() => setSelection('pd')}
                  text="PADRÕES"
               />

               <CircleSelect
                  selected={selection === 'sed'}
                  select={() => setSelection('sed')}
                  text="SED"
               />

               <CircleSelect
                  selected={selection === 'ser'}
                  select={() => setSelection('ser')}
                  text="SER"
               />

               <CircleSelect
                  selected={selection === 'set'}
                  select={() => setSelection('set')}
                  text="SET"
               />
            </HStack>
         </Center>

         <Box mt="10">
            {search.length > 0 ? (
               <Box>
                  {selection === 'pd' && (
                     <VStack space="2">
                        <FlatList
                           contentContainerStyle={{
                              paddingBottom: 300,
                           }}
                           data={pad}
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

                  {selection === 'sed' && (
                     <VStack space="2">
                        <FlatList
                           contentContainerStyle={{
                              paddingBottom: 300,
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
                  )}

                  {selection === 'ser' && (
                     <VStack space="2">
                        <FlatList
                           contentContainerStyle={{
                              paddingBottom: 300,
                           }}
                           data={ser}
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

                  {selection === 'set' && (
                     <VStack space="2">
                        <FlatList
                           contentContainerStyle={{
                              paddingBottom: 300,
                           }}
                           data={set}
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
            ) : (
               <Box>
                  {selection === 'pd' && (
                     <VStack space="2">
                        <FlatList
                           contentContainerStyle={{
                              paddingBottom: 300,
                           }}
                           data={Pd}
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

                  {selection === 'sed' && (
                     <VStack space="2">
                        <FlatList
                           contentContainerStyle={{
                              paddingBottom: 300,
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

                  {selection === 'ser' && (
                     <VStack space="2">
                        <FlatList
                           contentContainerStyle={{
                              paddingBottom: 300,
                           }}
                           data={Ser}
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

                  {selection === 'set' && (
                     <VStack space="2">
                        <FlatList
                           contentContainerStyle={{
                              paddingBottom: 300,
                           }}
                           data={Set}
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
            )}
         </Box>
      </Container>
   );
}
