declare namespace GradientBackgroundStackNavigatorNamespace {
  type DefaultNavigatorProps = import('./types').DefaultNavigatorProps;

  interface CustomProps {
    colors?: (string | number)[];
    start?: { x: number; y: number };
    end?: { x: number; y: number };
  }

  export type Props = DefaultNavigatorProps & CustomProps;
}
