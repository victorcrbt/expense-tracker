declare namespace GradientBackgroundStackNavigatorNamespace {
  type LinearGradientProps =
    import('react-native-linear-gradient').LinearGradientProps;

  interface ContainerProps {
    backgroundColors?: (string | number)[];
  }

  export type CustomContainerProps = Partial<LinearGradientProps> &
    ContainerProps &
    Omit<GradientBackgroundStackNavigatorNamespace.CustomProps, 'colors'>;
}
