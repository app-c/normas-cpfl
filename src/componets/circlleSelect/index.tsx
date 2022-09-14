import React from 'react';
import { Box, Center, HStack, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Title } from './styles';

interface Props {
   select: () => void;
   text: string;
   selected: boolean;
}

export function CircleSelect({ select, text, selected }: Props) {
   return (
      <TouchableOpacity onPress={select}>
         <HStack space={1}>
            <Center
               w="6"
               h="6"
               borderWidth={2}
               borderColor="dark.900"
               borderRadius={12}
            >
               <Box
                  bg={selected ? 'dark.900' : 'transparent'}
                  w="3"
                  h="3"
                  borderRadius="6"
               />
            </Center>
            <Title>{text}</Title>
         </HStack>
      </TouchableOpacity>
   );
}
