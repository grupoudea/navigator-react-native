import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any> {}


const Screen1 = ({navigation}: Props) => {
  

  return (
    <View style={styles.globalMargin}>
        <Text>Tab 1</Text>
        <Button title="Go to Tab2" onPress={() => navigation.navigate('Screen2')}></Button>
    </View>
  )
}

export default Screen1