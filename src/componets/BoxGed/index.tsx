import { Center } from 'native-base';
import React from 'react';
import { Container, Content, Header, TextD, Title } from './styles';

interface Props {
   title: string;
   item: string;
   pres: () => void;
   color: string;
}

export function BoxGed({ title, item, pres, color }: Props) {
   return (
      <Container onPress={pres}>
         <Center>
            <Content>
               <TextD>{item}</TextD>
            </Content>
         </Center>
      </Container>
   );
}
