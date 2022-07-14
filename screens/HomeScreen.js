import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation} from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustemtsIcon,
} from 'react-native-heroicons/outline'


export default function HomeScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })
  return (
    <SafeAreaView>
      <Text className='text-red-500'>
        {/* Header */}
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
          <Image 
            source={{
              uri:'https://links.papareact.com/wru'
            }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />
          <View>
            <Text className='font-bold text-gray-500 text-xs'>Deliver Now!</Text>
            <Text className='font-bold text-xl'>Curent Location
              <ChevronDownIcon size={20} color="#00ccbb"/></Text>
          </View>
        </View>
      </Text>
    </SafeAreaView>
  )
}