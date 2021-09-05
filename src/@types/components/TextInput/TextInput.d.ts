declare namespace TextInputNamespace {
  type TextInputProps = import('react-native').TextInputProps;

  interface CustomProps {
    label?: string;
    marginTop?: string | number;
    marginRight?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;
  }

  export type Props = TextInputProps & CustomProps;
}
