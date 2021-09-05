import React, { Touch } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Text } from './styles';

export const Link: React.FC<LinkNamespace.Props> = ({
  children,
  color = '#fff',
  ...props
}) => (
  <Container {...props}>
    <Text color={color}>{children}</Text>
  </Container>
);
