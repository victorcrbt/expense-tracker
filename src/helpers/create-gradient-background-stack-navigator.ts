import { createNavigatorFactory } from '@react-navigation/native';

import { GradientBackgroundStackNavigator } from '@components/GradientBackgroundStackNavigator';

export const createGradientBackgroundStackNavigator = createNavigatorFactory(
  GradientBackgroundStackNavigator
);
