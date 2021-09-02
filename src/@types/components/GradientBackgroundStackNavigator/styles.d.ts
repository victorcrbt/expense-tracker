/// <reference types="react" />

declare namespace GradientBackgroundStackNavigatorNamespace.Styles {
  type PropsWithChildren<P> = React.PropsWithChildren<P>;

  type LinearGradientProps =
    import('react-native-linear-gradient').LinearGradientProps;
  interface ContainerProps {
    backgroundColors?: (string | number)[];
  }

  export type CustomContainerProps = (
    props: PropsWithChildren<
      Partial<LinearGradientProps> &
        ContainerProps &
        Omit<GradientBackgroundStackNavigatorNamespace.CustomProps, 'colors'>
    >
  ) => any;
}
