import { Box, Center } from 'native-base';
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
         <Box px="2">
            <TextD>{item}</TextD>
         </Box>
      </Container>
   );
}
