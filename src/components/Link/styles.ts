import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 4px 0;
`;

export const Text = styled.Text<LinkNamespace.Styles.TextProps>`
  text-align: center;
  font-size: ${props => props.theme.fontSize.h5};
  font-weight: bold;
  color: ${props => props.color};
`;
