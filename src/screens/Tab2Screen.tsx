import React, { useEffect } from 'react'
import { Text, View } from 'react-native';

const Tab2Screen = () => {
  useEffect(() => {
    console.log("Tab 2");
    
  })
  return (
    <View> 
        <Text style={{color: 'black'}}>Tab 2</Text>
    </View>
  )
}

export default Tab2Screen