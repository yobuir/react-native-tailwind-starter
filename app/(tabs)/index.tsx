import { HelloWave } from '@/components/hello-wave';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <View className="h-64 bg-gradient-to-b from-blue-400 to-blue-600 items-center justify-center">
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          className="absolute bottom-0 left-0 h-44 w-72"
        />
      </View>

      {/* Content */}
      <View className="p-8 gap-4">
        <View className="flex-row items-center gap-2">
          <Text className="text-3xl font-bold text-gray-800 dark:text-gray-200">Welcome!</Text>
          <HelloWave />
        </View>

        <View className="gap-2 mb-2">
          <Text className="text-xl font-bold text-gray-800 dark:text-gray-200">Step 1: Try it</Text>
          <Text className="text-base text-gray-600 dark:text-gray-400">
            Edit <Text className="font-semibold">app/(tabs)/index.tsx</Text> to see changes.
            Press <Text className="font-semibold">cmd + d</Text> to open developer tools.
          </Text>
        </View>

        <View className="gap-2 mb-2">
          <Link href="/modal" className="mb-4">
            <Text className="text-xl font-bold text-blue-600">Step 2: Explore</Text>
          </Link>
          <Text className="text-base text-gray-600 dark:text-gray-400">
            Tap the Explore tab to learn more about what's included in this starter app.
          </Text>
        </View>

        <View className="gap-2 mb-2">
          <Text className="text-xl font-bold text-gray-800 dark:text-gray-200">Step 3: Get a fresh start</Text>
          <Text className="text-base text-gray-600 dark:text-gray-400">
            When you're ready, run <Text className="font-semibold">npm run reset-project</Text> to get a fresh{' '}
            <Text className="font-semibold">app</Text> directory. This will move the current{' '}
            <Text className="font-semibold">app</Text> to{' '}
            <Text className="font-semibold">app-example</Text>.
          </Text>
        </View>

        <View className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mt-4">
          <Text className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            🎉 Tailwind CSS Ready!
          </Text>
          <Text className="text-gray-600 dark:text-gray-400">
            All components have been converted to use Tailwind CSS. No more StyleSheet imports needed!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
} 