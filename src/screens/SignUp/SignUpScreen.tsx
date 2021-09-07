import React, { useState, useRef } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { TextInput as RNTextInput } from 'react-native';

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
  const emailInputRef = useRef<RNTextInput>(null);
  const passwordInputRef = useRef<RNTextInput>(null);

  const [inputs, setInputs] = useState<SignUpScreenNamespace.Inputs>({
    name: '',
    email: '',
    password: '',
  });

  function handleChangeInput({
    key,
    value,
  }: SignUpScreenNamespace.HandleInputChangeFunctionArgs) {
    setInputs(prevState => ({
      ...prevState,
      [key]: value,
    }));
  }

  function navigateToSignInScreen() {
    navigation.navigate('SignIn');
  }

  function focusEmailInput() {
    if (emailInputRef && emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }

  function focusPasswordInput() {
    if (passwordInputRef && passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  }

  return (
    <Container>
      <Typography variant="h1">Cadastro</Typography>

      <TextInput
        label="Nome"
        value={inputs.name}
        onChangeText={value => handleChangeInput({ key: 'name', value })}
        placeholder="Digite seu nome..."
        autoCapitalize="words"
        autoCompleteType="name"
        autoCorrect={false}
        clearButtonMode="while-editing"
        enablesReturnKeyAutomatically
        returnKeyType="next"
        onSubmitEditing={focusEmailInput}
        textContentType="emailAddress"
      />
      <TextInput
        ref={emailInputRef}
        label="E-mail"
        value={inputs.email}
        onChangeText={value => handleChangeInput({ key: 'email', value })}
        placeholder="Digite seu e-mail..."
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
        autoCorrect={false}
        clearButtonMode="while-editing"
        enablesReturnKeyAutomatically
        returnKeyType="next"
        onSubmitEditing={focusPasswordInput}
        textContentType="emailAddress"
      />
      <TextInput
        ref={passwordInputRef}
        label="Senha"
        value={inputs.password}
        onChangeText={value => handleChangeInput({ key: 'password', value })}
        placeholder="Digite sua senha..."
        secureTextEntry
        autoCapitalize="none"
        autoCompleteType="off"
        autoCorrect={false}
        clearButtonMode="while-editing"
        enablesReturnKeyAutomatically
        returnKeyType="go"
        textContentType="password"
      />

      <Button onPress={() => {}} marginTop={16}>
        cadastrar
      </Button>

      <Link onPress={navigateToSignInScreen}>
        Já possui cadastro? Entre agora!
      </Link>
    </Container>
  );
};
