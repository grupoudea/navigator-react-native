import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/AppTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> {}


const Screen1 = ({navigation}: Props) => {

  
  

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Tab 1</Text>
        <Button title="Go to Tab2" onPress={() => navigation.navigate('Screen2')}></Button>
        <Text style={styles.title}>Navegar con argumentos</Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity 
            style={{...styles.botonGrande, backgroundColor: '#5856d6' }}
            onPress={() => navigation.navigate('PersonScreen', {
              id: 1,
              nombre: 'Pedro'
            })} >
            <Text style={styles.botonGrandeTexto}>Pedro</Text>
          </TouchableOpacity> 

          <TouchableOpacity 
            style={styles.botonGrande}
            onPress={() => navigation.navigate('PersonScreen', {
              id: 2,
              nombre: 'Kelly'
            })} >
            <Text style={styles.botonGrandeTexto}>Kelly</Text>
          </TouchableOpacity>
        </View>
        

    </View>
  )
}

export default Screen1