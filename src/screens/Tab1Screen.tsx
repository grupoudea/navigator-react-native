import React from 'react'
import { Text, View } from 'react-native';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab1Screen = () => {
  useEffect(() => {
    console.log("Tab 1");
    
  })

  return (
    <View style={{margin: 20}}> 
        <Text style={{color: 'black', fontSize: 20}}>Tab 1</Text>
        <Icon name="rocket" size={30} color="#900" />
    </View>
  )
}

export default Tab1Screen