import styled from 'styled-components/native';

export const Container = styled.Pressable<ButtonNamespace.Styles.ContainerProps>`
  height: 60px;

  border-radius: 8px;
  background: ${props =>
    props.outlined ? 'transparent' : props.theme.colors.secondary};
  border: 2px solid ${props => props.theme.colors.secondary};

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
