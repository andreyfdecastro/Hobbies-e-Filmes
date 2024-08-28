import { TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import TextButon from '../TextButon'


const Mybutton = ({screen,name}) => {
    const navigation = useNavigation()
  return (
  <TouchableOpacity onPress={() => navigation.navigate(screen)}>
 <TextButon text={name} />
    </TouchableOpacity>
  )
}

export default Mybutton