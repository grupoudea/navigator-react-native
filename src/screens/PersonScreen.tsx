import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { useEffect } from 'react';
import { RootStackParams } from '../navigation/StackNavigator';
import { AuthContext } from '../context/AuthContext';

/*interface RouterParams {
    id: number;
    nombre: string;
}*/

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{};

const PersonScreen = ({navigation, route}: Props) => {   
    //const params = route.params as RouterParams;
    const params = route.params;

    const {changeUserName} = useContext(AuthContext);


    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])

    useEffect(() =>{
        changeUserName(params.nombre)

    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
        </View>
    )
}

export default PersonScreen