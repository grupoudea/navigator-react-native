import React, { useEffect } from 'react'
import { Text, View } from 'react-native';

const Tab3Screen = () => {

  useEffect(() => {
    console.log("Tab 3");
    
  })


  return (
    <View> 
        <Text style={{color: 'black'}}>Tab 3</Text>
    </View>
  )
}

export default Tab3Screen