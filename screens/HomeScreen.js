import { View, Text, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation} from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from 'react-native-heroicons/outline'


export default function HomeScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })
  return (
    <SafeAreaView className='bg-white pt-5'>
      {/* Header */}
        <View className='flex-row pb-3 items-center mx-4 space-x-2 '>
          <Image 
            source={{
              uri:'https://links.papareact.com/wru'
            }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />
          <View className="flex flex-1">
            <Text className='font-bold text-gray-500 text-xs'>Deliver Now!</Text>
            <Text className='font-bold text-xl'>Curent Location
              <ChevronDownIcon size={20} color="#00ccbb"/></Text>
          </View>

          <UserIcon size={35} color="#00ccbb"/>
        </View>
        {/* Search */}
        <View className='flex-row items-center space-x-2 pb-2 mx-4'>
          <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3'>
            <SearchIcon color="gray" size={20}/>
            <TextInput placeholder='Restaurants and cuisines' 
            keyboardType='default'
            />
          </View>
          <AdjustmentsIcon color="#00ccbb" />
        </View>
    </SafeAreaView>
  )
}