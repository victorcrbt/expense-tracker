import React from 'react';

import { Container, LabelWrapper, LabelText, Input } from './styles';

export const TextInput: React.FC<TextInputNamespace.Props> = ({
  label,
  marginTop = '0',
  marginRight = '0',
  marginBottom = '16',
  marginLeft = '0',
  ...props
}) => (
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

    <Input {...props} placeholderTextColor="#e5e5e5" />
  </Container>
);
