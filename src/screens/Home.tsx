import { Text, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Button } from '../components/Button';

import colors from 'tailwindcss/colors';
import { ToggleTheme } from '../components/ToggleTheme';

export function Home() {
  return(
    <View className="flex-1 items-center justify-center dark:bg-black light:bg-white p-8">
      <ToggleTheme />

      <Feather name="home" size={40} color={colors.green[500]} />

      <Text className="dark:text-white light:text-black text-3xl font-bold mt-2">
        NativeWind.
      </Text>

      <TextInput 
        className="w-full h-14 border-2 dark:border-white light:border-black rounded-md mt-8 dark:text-white light:text-black px-4 focus:border-green-500"
      />

      <TextInput 
        className="w-full h-14 border-2 dark:border-white light:border-black rounded-md mt-8 dark:text-white light:text-black px-4 focus:border-green-500"
      />

      <Button className="w-full mt-8"/>

    </View>    
  )
}