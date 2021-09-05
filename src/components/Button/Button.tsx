import React from 'react';

import { Container, ButtonText } from './styles';

export const Button: React.FC<ButtonNamespace.Props> = ({
  children,
  outlined = false,
  marginTop = '0',
  marginRight = '0',
  marginBottom = '16',
  marginLeft = '0',
  ...props
}) => (
  <Container
    {...props}
    outlined={outlined}
    marginTop={marginTop}
    marginRight={marginRight}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
  >
    <ButtonText outlined={outlined}>{children}</ButtonText>
  </Container>
);
