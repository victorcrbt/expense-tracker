import React from 'react';
import styled from 'styled-components/native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

export const Container = styled<GradientBackgroundStackNavigatorNamespace.Styles.CustomContainerProps>(
  LinearGradient as unknown as GradientBackgroundStackNavigatorNamespace.Styles.CustomContainerProps
).attrs<GradientBackgroundStackNavigatorNamespace.Styles.ContainerProps>(
  props => {
    const { primary, lightPrimary } = props.theme.colors;

    return {
      colors: props.backgroundColors || [primary, lightPrimary],
      start: props.start || { x: 0, y: 0.45 },
      end: props.end || { x: 1, y: 0.6 },
    } as LinearGradientProps;
  }
)`
  flex: 1;
`;
