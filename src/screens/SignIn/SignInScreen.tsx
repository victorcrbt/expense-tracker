import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

// Shared Components
import { Typography } from '@components/Typography';
import { Button } from '@components/Button';
import { TextInput } from '@components/TextInput';
import { Link } from '@components/Link';

// Local Imports
import { Container } from './styles';

export const SignInScreen: React.FC<
  StackScreenProps<GuestNavigatorNamespace.ParamsList, 'SignIn'>
> = ({ navigation }) => {
  function navigateToSignUpScreen() {
    navigation.navigate('SingUp');
  }

  return (
    <Container>
      <Typography variant="h1">Login</Typography>

      <TextInput label="E-mail" placeholder="Digite seu e-mail..." />
      <TextInput label="Senha" placeholder="Digite sua senha..." />

      <Button onPress={() => {}} marginTop={16}>
        entrar
      </Button>

      <Link onPress={navigateToSignUpScreen}>
        Não possui cadastro? Faça agora!
      </Link>
    </Container>
  );
};
