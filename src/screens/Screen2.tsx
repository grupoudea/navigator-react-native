import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { useNavigation } from '@react-navigation/core'

const Screen2 = () => {
  const navigator = useNavigation();

  return (
    <View style={styles.globalMargin}>
        <Text>Tab 2</Text>
        <Button title="Go to Tab3" onPress={() => navigator.navigate("Screen3") }></Button>

    </View>
  )
}

export default Screen2