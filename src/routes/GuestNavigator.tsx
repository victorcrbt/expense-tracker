import React from 'react';

// Configs
import { guestNavigatorScreenOptions } from '@config/guest-navigator';

// Shared Components
import { createGradientBackgroundStackNavigator } from '@helpers/create-gradient-background-stack-navigator';

// Screens
import { SignInScreen } from '@screens/SignIn';
import { SingUpScreen } from '@screens/SignUp';

const { Navigator, Screen } =
  createGradientBackgroundStackNavigator<GuestNavigatorNamespace.ParamsList>();

export const GuestNavigator = () => (
  <Navigator screenOptions={guestNavigatorScreenOptions}>
    <Screen name="SignIn" component={SignInScreen} />
    <Screen name="SingUp" component={SingUpScreen} />
  </Navigator>
);
