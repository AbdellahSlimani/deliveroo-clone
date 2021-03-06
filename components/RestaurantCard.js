import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'

const RestaurantCard = (props) => {
  return (
    <TouchableOpacity className='bg-white mr-3 shadow'>
      <Image source={{
        uri: props.imgUrl
      }}
        className='h-36 w-64 rounded-sm'
      />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg'>{props.title}</Text>
        <View className="flex-row itms-center">
          <StarIcon color='green' opacity={0.5} size={22}/>
          <Text className="text-xs text-gray-500">
            <Text className='text-green-500'>{props.rating}</Text> . {props.genre}
          </Text>
        </View>
        <View className='flex-row items-center space-x-1'> 
          <LocationMarkerIcon color='gray' opacity={0.4} size={22}/>
          <Text className="text-xs text-gray-500">Nearby . {props.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard