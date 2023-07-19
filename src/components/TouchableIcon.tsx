import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colores } from '../theme/AppTheme'
import { AuthContext } from '../context/AuthContext'

interface TouchableIconProps {
    iconName: string,

}

const TouchableIcon = ({iconName}: TouchableIconProps) => {

    const {changeFavIcon} =  useContext(AuthContext);

  return (
    <TouchableOpacity 
        onPress={() => changeFavIcon(iconName)}
    >
        <Icon name={iconName} size={ 80 } color={ colores.primary } />
    </TouchableOpacity>
  )
}

export default TouchableIcon