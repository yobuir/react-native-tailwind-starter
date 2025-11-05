import { View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ className, ...otherProps }: ThemedViewProps) {
  return <View className={`bg-white dark:bg-gray-900 ${className || ''}`} {...otherProps} />;
}
