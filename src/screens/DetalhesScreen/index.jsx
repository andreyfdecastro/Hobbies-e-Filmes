import React from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'

const DetalhesScreen = () => {
  const route = useRoute()
  const { item } = route.params

  return (
    <View>
      <Text>Detalhes do Item:</Text>
      <Text>{item}</Text>
    </View>
  )
}

export default DetalhesScreen