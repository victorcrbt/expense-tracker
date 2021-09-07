import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, Pressable } from 'react-native';

// Shared Components
import { Typography } from '@components/Typography';
import { Button } from '@components/Button';
import { TextInput } from '@components/TextInput';
import { Link } from '@components/Link';

// Local Imports
import { Container } from './styles';

export const SingUpScreen: React.FC<
  StackScreenProps<GuestNavigatorNamespace.ParamsList, 'SingUp'>
> = ({ navigation }) => {
  function navigateToSignInScreen() {
    navigation.navigate('SignIn');
  }

  return (
    <Container>
      <Typography variant="h1">Cadastro</Typography>

      <TextInput label="Nome" placeholder="Digite seu nome..." />
      <TextInput label="E-mail" placeholder="Digite seu e-mail..." />
      <TextInput label="Senha" placeholder="Digite sua senha..." />

      <Button onPress={() => {}} marginTop={16}>
        cadastrar
      </Button>

      <Link onPress={navigateToSignInScreen}>
        Já possui cadastro? Entre agora!
      </Link>
    </Container>
  );
};
