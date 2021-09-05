declare namespace ButtonNamespace {
  type PressableProps = import('react-native').PressableProps;

  interface CustomProps {
    marginTop?: string | number;
    marginRight?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;
    outlined?: boolean;
    variant?:
      | 'primary'
      | 'secondary'
      | 'success'
      | 'danger'
      | 'warning'
      | 'info';
  }

  export type Props = PressableProps & CustomProps;
}
