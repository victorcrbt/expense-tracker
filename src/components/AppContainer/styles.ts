import styled, { css } from 'styled-components/native';
import { StatusBar, Platform } from 'react-native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs(props => {
  const { primary, lightPrimary } = props.theme.colors;

  return {
    colors: [primary, lightPrimary],
    start: { x: 0, y: 0.45 },
    end: { x: 1, y: 0.6 },
  } as LinearGradientProps;
})`
  padding: 8px;

  flex: 1;

  ${Platform.OS === 'android' &&
  StatusBar.currentHeight &&
  css`
    padding-top: ${StatusBar.currentHeight}px;
  `}
`;
