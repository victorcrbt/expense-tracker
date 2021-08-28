declare namespace ButtonNamespace {
  type PressableProps = import('react-native').PressableProps;

  interface CustomProps {
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
