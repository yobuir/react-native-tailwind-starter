# React Native Tailwind Starter 🚀

A modern React Native starter template with Expo and Tailwind CSS (NativeWind) pre-configured and ready to use.

## Features ✨

- ⚡️ **Expo Router** - File-based routing for React Native
- 🎨 **Tailwind CSS** - Utility-first CSS framework via NativeWind
- 📱 **Cross-platform** - iOS, Android, and Web support
- 🌙 **Dark mode** - Built-in dark mode support
- 📦 **TypeScript** - Full TypeScript support
- 🔥 **Hot reload** - Fast development experience

## Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npx expo start
   ```

3. **Open the app**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator  
   - Press `w` for web browser
   - Scan QR code with Expo Go app

## Tailwind CSS Usage

This starter comes with NativeWind pre-configured. You can use Tailwind classes directly in your components:

```tsx
import { View, Text } from 'react-native';

export function MyComponent() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-100">
      <Text className="text-xl font-bold text-gray-800">
        Hello Tailwind!
      </Text>
    </View>
  );
}
```

## Project Structure

```
├── app/                    # App screens (Expo Router)
├── components/            # Reusable components
├── constants/            # App constants and themes
├── hooks/               # Custom React hooks
├── assets/              # Images, fonts, etc.
├── global.css          # Tailwind CSS directives
├── tailwind.config.js  # Tailwind configuration
└── metro.config.js     # Metro bundler config
```

## Configuration Files

- `tailwind.config.js` - Tailwind CSS configuration
- `babel.config.js` - Babel configuration with NativeWind
- `metro.config.js` - Metro bundler with CSS processing
- `global.css` - Global Tailwind CSS directives

## Learn More

- 📚 [Expo Documentation](https://docs.expo.dev/)
- 🎨 [NativeWind Documentation](https://www.nativewind.dev/)
- 🎯 [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- 🗂️ [Expo Router Documentation](https://docs.expo.dev/router/introduction/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
