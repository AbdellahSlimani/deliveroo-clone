import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

const FeaturedRow = (props) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className="text-lg font-bold">{props.title}</Text>
        <ArrowRightIcon color="#00ccbb"/>
      </View>

      <Text className='text-xs text-gray-500 px-4'>{props.description}</Text>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className='pt-4'
      >
        {/* RestaurantCards */}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow