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

export const SignInScreen: React.FC<
  StackScreenProps<GuestNavigatorNamespace.ParamsList, 'SignIn'>
> = ({ navigation }) => {
  const passwordInputRef = useRef<RNTextInput>(null);

  const [inputs, setInputs] = useState<SignInScreenNamespace.Inputs>({
    email: '',
    password: '',
  });

  function handleChangeInput({
    key,
    value,
  }: SignInScreenNamespace.HandleInputChangeFunctionArgs) {
    setInputs(prevState => ({
      ...prevState,
      [key]: value,
    }));
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SingUp');
  }

  function focusPasswordInput() {
    if (passwordInputRef && passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  }

  return (
    <Container>
      <Typography variant="h1">Login</Typography>

      <TextInput
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
        entrar
      </Button>

      <Link onPress={navigateToSignUpScreen}>
        Não possui cadastro? Faça agora!
      </Link>
    </Container>
  );
};
