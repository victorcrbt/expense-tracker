import styled, { css } from 'styled-components/native';

export const Container = styled.Text<TypographyNamespace.Styles.ContainerProps>`
  width: 100%;
  margin: 8px 0;

  text-transform: ${props => props.transform};
  text-align: ${props => props.alignment};
  color: ${props => props.color};

  ${props => css`
    font-size: ${props.theme.fontSize[props.variant!]};
    font-weight: ${['h1', 'h2', 'h3'].includes(props.variant!)
      ? 'bold'
      : 'normal'};
  `}
`;
