import React from 'react';
import { useNavigationBuilder, StackRouter } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';

import { Container } from './styles';

export const GradientBackgroundStackNavigator: React.FC<GradientBackgroundStackNavigatorNamespace.Props> =
  ({ children, initialRouteName, screenOptions, colors, start, end }) => {
    const { state, navigation, descriptors, NavigationContent } =
      useNavigationBuilder(StackRouter, {
        children,
        initialRouteName,
        screenOptions,
      });

    return (
      <NavigationContent>
        <Container backgroundColors={colors} start={start} end={end}>
          {state.routes.map((route, index) => (
            <View
              key={route.key}
              style={[
                StyleSheet.absoluteFill,
                { display: index === state.index ? 'flex' : 'none', flex: 1 },
              ]}
            >
              {descriptors[route.key].render()}
            </View>
          ))}
        </Container>
      </NavigationContent>
    );
  };
