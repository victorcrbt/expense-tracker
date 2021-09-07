import React, { forwardRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';

import { Container, LabelWrapper, LabelText, Input } from './styles';

export const TextInput = forwardRef<RNTextInput, TextInputNamespace.Props>(
  (
    {
      label,
      marginTop = '0',
      marginRight = '0',
      marginBottom = '16',
      marginLeft = '0',
      ...props
    },
    ref
  ) => (
    <Container
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
    >
      {label && (
        <LabelWrapper>
          <LabelText>{label}</LabelText>
        </LabelWrapper>
      )}

      <Input ref={ref} {...props} placeholderTextColor="#e5e5e5" />
    </Container>
  )
);
