declare namespace TypographyNamespace {
  type TextProps = import('react-native').TextProps;
  type DefaultTheme = import('styled-components').DefaultTheme;

  interface CustomProps {
    variant?: 'paragraph' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    alignment?: 'left' | 'center' | 'right';
    color?: string;
    transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  }

  export type Props = TextProps & CustomProps;
}
