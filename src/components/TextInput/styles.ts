import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View<TextInputNamespace.Props>`
  width: 100%;
  margin-top: ${props =>
    props.marginTop && Number.isNaN(Number(props.marginTop))
      ? props.marginTop
      : `${props.marginTop}px`};
  margin-right: ${props =>
    props.marginRight && Number.isNaN(Number(props.marginRight))
      ? props.marginRight
      : `${props.marginRight}px`};
  margin-bottom: ${props =>
    props.marginBottom && Number.isNaN(Number(props.marginBottom))
      ? props.marginBottom
      : `${props.marginBottom}px`};
  margin-left: ${props =>
    props.marginLeft && Number.isNaN(Number(props.marginLeft))
      ? props.marginLeft
      : `${props.marginLeft}px`};
`;

export const LabelWrapper = styled.View`
  margin-bottom: 4px;
  margin-left: 4px;
`;

export const LabelText = styled.Text`
  font-weight: bold;
  color: #ffffff;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 60px;
  padding: 0 16px;

  font-size: 16px;
  color: #ffffff;
  border: ${props => props.theme.border.size.medium} solid
    ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.border.radius.medium};
`;
