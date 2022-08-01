import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const DishRow = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <Text className="text-lg mb-1">{props.name}</Text>
        <Text className="text-gray-400 ">{props.description}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default DishRow