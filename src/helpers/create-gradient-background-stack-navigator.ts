import { createNavigatorFactory } from '@react-navigation/native';

import { GradientBackgroundStackNavigator } from '@containers/GradientBackgroundStackNavigator';

export const createGradientBackgroundStackNavigator = createNavigatorFactory(
  GradientBackgroundStackNavigator
);
