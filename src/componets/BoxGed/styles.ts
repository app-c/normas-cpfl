import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';
import { theme } from '../../global/theme';

const { colors } = theme;
const w = Dimensions.get('window').width;

interface Color {
   color: string;
}

export const Container = styled.TouchableOpacity`
   background-color: ${colors.secondary.solid};
   width: 100%;
   min-height: ${w * 0.25}px;
   border-radius: 5px;
   margin-top: ${RFValue(10)}px;
   padding-bottom: 10px;
   border-width: 4px;
   border-color: #204661;
   justify-content: center;
`;

export const Content = styled.View<Color>`
   padding: 5px 10px;
`;

export const Header = styled.View<Color>`
   width: 100%;
   align-items: center;
   justify-content: center;
   background-color: ${({ color }) => color};
`;

export const Title = styled.Text`
   font-size: ${RFValue(14)}px;
   color: ${colors.text.solid};
   text-align: center;
`;

export const TextD = styled.Text`
   font-size: ${RFValue(14)}px;
   color: ${colors.text.solid};
   text-align: left;
   font-family: 'regu';
`;
