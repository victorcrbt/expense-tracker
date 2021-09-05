import React from 'react';

import { Container } from './styles';

export const Typography: React.FC<TypographyNamespace.CustomProps> = ({
  children,
  variant = 'paragraph',
  alignment = 'center',
  color = '#f5f5f5',
  transform = 'none',
}) => (
  <Container
    variant={variant}
    transform={transform}
    alignment={alignment}
    color={color}
  >
    {children}
  </Container>
);
