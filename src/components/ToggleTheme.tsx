import { View, Text, Switch } from 'react-native';
import { useColorScheme } from 'nativewind';

import colors from 'tailwindcss/colors';

export function ToggleTheme() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  
  return (
    <View className="flex-row gap-2 items-center pb-10">
      <Text className="text-yellow-500 uppercase font-bold">
        Dark
      </Text>

      <Switch 
        trackColor={{ true: colors.blue[400], false: colors.yellow[200] }}
        thumbColor={colorScheme === 'light' ? colors.blue[900] : colors.yellow[900]}
        onValueChange={toggleColorScheme}
        value={colorScheme === 'light'}
      />

      <Text className="text-blue-400 uppercase font-bold">
        Light
      </Text>
    </View>
  )
}