import React from 'react'
import { Text, View } from 'react-native';
import { useEffect } from 'react';

const Tab1Screen = () => {
  useEffect(() => {
    console.log("Tab 1");
    
  })

  return (
    <View style={{backgroundColor: 'white'}}> 
        <Text style={{color: 'black'}}>Tab 1</Text>
    </View>
  )
}

export default Tab1Screen