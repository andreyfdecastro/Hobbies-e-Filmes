import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


import styles from './styles'
import Mybutton from '../../components/MyButon'


export default function Home() {
  return (
    <View style={styles.container}>
     <Mybutton screen="HobbieseFilme" name=" HobbieseFilme" />
    </View>
  )
}