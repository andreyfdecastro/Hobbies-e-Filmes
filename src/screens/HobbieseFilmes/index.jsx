import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import Mybutton from '../../components/MyButon'


export default function HobbieseFilmes() {
  return (
    <View style={styles.container}>
   <Mybutton screen="Hobies" name="Go to Hobies" />
   <Mybutton screen="Filmes" name="Go to Filme" />
    </View>
  )
}