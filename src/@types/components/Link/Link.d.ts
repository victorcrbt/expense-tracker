declare namespace LinkNamespace {
  type TouchableOpacityProps = import('react-native').TouchableOpacityProps;

  interface CustomProps {
    color?: string;
  }

  export type Props = TouchableOpacityProps & CustomProps;
}
