import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { useNavigation } from '@react-navigation/core'

const Screen2 = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Pantalla 2',
    })
  })

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Tab 2</Text>
        <Button title="Go to Tab3" onPress={() => navigator.navigate("Screen3") }></Button>

    </View>
  )
}

export default Screen2