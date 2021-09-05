import styled from 'styled-components/native';

export const Container = styled.Pressable<ButtonNamespace.Styles.ContainerProps>`
  width: 100%;
  height: 60px;
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

  border-radius: ${props => props.theme.border.radius.medium};
  background: ${props =>
    props.outlined ? 'transparent' : props.theme.colors.secondary};
  border: ${props => props.theme.border.size.medium} solid
    ${props => props.theme.colors.secondary};

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<
  Pick<ButtonNamespace.Styles.ContainerProps, 'outlined'>
>`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
