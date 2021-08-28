import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text } from 'react-native';

import { Button } from '@components/Button';

export const SignInScreen: React.FC<
  StackScreenProps<GuestNavigatorNamespace.ParamsList, 'SignIn'>
> = ({ navigation }) => (
  <>
    <Text>Sing In</Text>
    <Button onPress={() => navigation.navigate('SingUp')}>
      Navegar para o cadastro
    </Button>
  </>
);
