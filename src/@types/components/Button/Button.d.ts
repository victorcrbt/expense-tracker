declare namespace ButtonNamespace {
  type PressableProps = import('react-native').PressableProps;

  interface CustomProps {
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
