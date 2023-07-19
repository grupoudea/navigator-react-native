import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colores } from '../theme/AppTheme'

interface TouchableIconProps {
    iconName: string,

}

const TouchableIcon = ({iconName}: TouchableIconProps) => {
  return (
    <TouchableOpacity 
        onPress={() => {console.log("iconName: "+iconName);
        }}
    >
        <Icon name={iconName} size={ 80 } color={ colores.primary } />
    </TouchableOpacity>
  )
}

export default TouchableIcon