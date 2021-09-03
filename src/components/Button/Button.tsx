import React from 'react';

import { Container, ButtonText } from './styles';

export const Button: React.FC<ButtonNamespace.Props> = ({
  children,
  outlined = false,
  ...props
}) => (
  <Container {...props} outlined={outlined}>
    <ButtonText>{children}</ButtonText>
  </Container>
);
