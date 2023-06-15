import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any> {}


const Screen1 = ({navigation}: Props) => {
  

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Tab 1</Text>
        <Button title="Go to Tab2" onPress={() => navigation.navigate('Screen2')}></Button>
        <Text style={styles.title}>Navegar con argumentos</Text>
        <TouchableOpacity 
          style={{backgroundColor: '#d3d3d3'}}
          onPress={() => navigation.navigate('PersonScreen', {
            id: 1,
            nombre: 'Pedro'
          })} >
          <Text style={styles.title}>Pedro</Text>
        </TouchableOpacity> 

    </View>
  )
}

export default Screen1