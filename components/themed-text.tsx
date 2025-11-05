import { Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  type = 'default',
  className,
  ...rest
}: ThemedTextProps) {
  const getClassNames = () => {
    const baseClasses = 'text-gray-800 dark:text-gray-200';
    
    switch (type) {
      case 'title':
        return `${baseClasses} text-3xl font-bold leading-8`;
      case 'subtitle':
        return `${baseClasses} text-xl font-bold`;
      case 'defaultSemiBold':
        return `${baseClasses} text-base leading-6 font-semibold`;
      case 'link':
        return 'text-blue-600 text-base leading-7';
      default:
        return `${baseClasses} text-base leading-6`;
    }
  };

  return (
    <Text
      className={`${getClassNames()} ${className || ''}`}
      {...rest}
    />
  );
}
