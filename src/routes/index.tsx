import React from 'react';

// Configs
import { mainNavigatorScreenOptions } from '@config/main-navigator';

// Shared Components
import { createGradientBackgroundStackNavigator } from '@helpers/create-gradient-background-stack-navigator';

// Navigators
import { GuestNavigator } from './GuestNavigator';

const { Navigator, Screen } =
  createGradientBackgroundStackNavigator<RouterNamespace.ParamsList>();

export const Router = () => (
  <Navigator screenOptions={mainNavigatorScreenOptions}>
    <Screen name="GuestNavigator" component={GuestNavigator} />
  </Navigator>
);
