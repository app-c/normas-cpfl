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
import { collection, onSnapshot } from 'firebase/firestore';
import fire from '@react-native-firebase/firestore';
import Pdf from 'react-native-pdf';
import { ClosedModa, Container, Title } from './styles';
import { theme } from '../../global/theme';

import { BoxGed } from '../../componets/BoxGed';
import { PdfTest } from '../Teste';
/* eslint-disable camelcase */
import logo from '../../../assets/logo.png';
import { CircleSelect } from '../../componets/circlleSelect';

interface Props {
   id: string;
   name: string;
   page: number;
   uri: string;
}

export function Home() {
   const w = Dimensions.get('window').width;

   //* *.................................................................... */
   const [search, setSearch] = React.useState('');
   const [response, setResponse] = React.useState<Props[]>([]);
   const [modal, setModal] = React.useState(false);
   const [selection, setSelection] = useState('sed');
   const [select, setSelect] = React.useState('');

   React.useEffect(() => {
      fire()
         .collection(selection)
         .onSnapshot(h => {
            const rs = h.docs.map(h => h.data() as Props);
            setResponse(rs);
         });
   }, [selection]);

   const geds =
      search.length > 0
         ? response.filter(h => {
              const name = h.name.toLowerCase();
              if (name.includes(search.toLowerCase())) {
                 return h;
              }
           })
         : response;

   const Select = React.useCallback((uri: string) => {
      setSelect(uri);
      setModal(true);
   }, []);

   const source = {
      uri: select,
      cache: true,
   };

   return (
      <Container>
         <Text position="absolute" left="5" color="dark.900">
            Vesion: 2.0.5
         </Text>
         <Modal visible={modal} animationType="fade">
            <ClosedModa onPress={() => setModal(false)}>
               <Text>FECHAR</Text>
            </ClosedModa>
            <Pdf
               trustAllCerts={false}
               source={source}
               onLoadComplete={(numberOfPages, filePath) => {}}
               onPageChanged={(page, numberOfPages) => {}}
               onError={error => {}}
               onPressLink={uri => {}}
               page={1}
               style={{ flex: 1 }}
            />
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
                  selected={selection === 'padrao'}
                  select={() => setSelection('padrao')}
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
            <FlatList
               contentContainerStyle={{
                  paddingBottom: 300,
               }}
               data={geds}
               renderItem={({ item: h }) => (
                  <>
                     <BoxGed item={h.name} pres={() => Select(h.uri)} />
                  </>
               )}
            />
         </Box>
      </Container>
   );
}
