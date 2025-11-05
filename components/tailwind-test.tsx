import React from 'react';
import { Text, View } from 'react-native';

export default function TailwindTest() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-100">
      <View className="bg-white p-6 rounded-lg shadow-lg">
        <Text className="text-2xl font-bold text-gray-800 mb-4">
          Tailwind CSS with NativeWind sadasd
        </Text>
        <Text className="text-gray-600 text-center">
          This component uses Tailwind CSS classes!
        </Text>
        <View className="mt-4 flex-row space-x-2">
          <View className="bg-blue-500 px-4 py-2 rounded">
            <Text className="text-white font-semibold">Button 1</Text>
          </View>
          <View className="bg-green-500 px-4 py-2 rounded">
            <Text className="text-white font-semibold">Button 2</Text>
          </View>
        </View>
      </View>
    </View>
  );
}