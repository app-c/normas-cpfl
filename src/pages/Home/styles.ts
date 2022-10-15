import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';
import { theme } from '../../global/theme';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const { colors } = theme;

export const Container = styled.View`
   padding: ${w * 0.07}px 8px;
   flex: 1;
   background-color: ${colors.primary.solid};
`;

export const Title = styled.Text`
   color: ${colors.text.solid};
   font-size: ${RFValue(18)}px;
   font-family: 'dark';
`;

export const PdfView = styled(Pdf)`
   width: ${w}px;
   height: ${h}px;
`;

export const ClosedModa = styled.TouchableOpacity`
   background-color: ${colors.success.solid};
   padding: 10px;
   width: ${w * 0.2}px;
   height: ${w * 0.1}px;
   border-radius: 5px;
   margin-top: ${RFValue(10)}px;
   margin-right: ${RFValue(10)}px;
   align-self: flex-end;
   align-items: center;
   justify-content: center;
`;
