import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, Pressable } from 'react-native';

import { Button } from '@components/Button';

export const SingUpScreen: React.FC<
  StackScreenProps<GuestNavigatorNamespace.ParamsList, 'SingUp'>
> = ({ navigation }) => (
  <>
    <Text>Sign Up</Text>
    <Button onPress={() => navigation.navigate('SignIn')}>
      Navegar para o login
    </Button>
  </>
);
