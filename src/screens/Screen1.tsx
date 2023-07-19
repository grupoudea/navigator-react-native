import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { colores, styles } from '../theme/AppTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> {}


const Screen1 = ({navigation}: Props) => {

  useEffect(() => {
        
    navigation.setOptions({
        headerLeft: () => (
            <TouchableOpacity
                style={{
                    marginLeft: 10
                }}
                onPress={ () => navigation.toggleDrawer()  }
            >
                <Icon 
                    name="menu-outline"
                    color={ colores.primary }
                    size={ 35 }
                />
            </TouchableOpacity>
        )
    })
  }, [])


  

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
            <Icon name="man-outline" size={30} />
          </TouchableOpacity> 

          <TouchableOpacity 
            style={styles.botonGrande}
            onPress={() => navigation.navigate('PersonScreen', {
              id: 2,
              nombre: 'Kelly'
            })} >
            <Text style={styles.botonGrandeTexto}>Kelly</Text>
            <Icon name="woman-outline" size={30} />
          </TouchableOpacity>
        </View>
        

    </View>
  )
}

export default Screen1