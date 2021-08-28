import React from 'react';

import { Container, ButtonText } from './styles';

export const Button: React.FC<ButtonNamespace.Props> = ({
  children,
  ...props
}) => (
  <Container {...props}>
    <ButtonText>{children}</ButtonText>
  </Container>
);
