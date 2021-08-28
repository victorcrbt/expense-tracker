import styled from 'styled-components/native';

export const Container = styled.Pressable`
  height: 60px;

  background: transparent;
  border: 2px solid ${props => props.theme.colors.secondary};

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
