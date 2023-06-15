import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'

interface Props extends StackScreenProps<any, any> {}

const Screen3 = ({navigation} : Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Tab 3</Text>
        <Button title="Regresar" onPress={() => navigation.pop() }></Button>

        <Button title="Regresar a screen 1" onPress={() => navigation.popToTop() }></Button>


    </View>
  )
}

export default Screen3