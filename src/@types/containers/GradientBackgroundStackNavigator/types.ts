import {
  ParamListBase,
  NavigationState,
  EventMapBase,
  DefaultNavigatorOptions,
} from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';

export type DefaultNavigatorProps = DefaultNavigatorOptions<
  ParamListBase,
  NavigationState,
  StackNavigationOptions,
  EventMapBase
>;
