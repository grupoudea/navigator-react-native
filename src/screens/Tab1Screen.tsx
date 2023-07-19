import React from 'react'
import { Text, View } from 'react-native';
import { useEffect } from 'react';
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {
  useEffect(() => {
    console.log("Tab 1");
    
  })

  return (
    <View style={{margin: 20}}> 
        <Text style={{color: 'black', fontSize: 20}}>Tab 1</Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="attach-outline"  />
        <TouchableIcon iconName="bonfire-outline"  />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="chatbubble-ellipses-outline"  />
        <TouchableIcon iconName="images-outline"  />
        <TouchableIcon iconName="leaf-outline"  />
            
    </View>
  )
}

export default Tab1Screen