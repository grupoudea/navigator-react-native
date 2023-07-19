import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/AppTheme';
import { AuthContext } from '../context/AuthContext';

const ContactScreen = () => {

  const {signIn, authState} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>ContactScreen text screen</Text>
        {
          (!authState.isLoggedIn) && ( 
          <Button
            title='SignIn'
            onPress={signIn}
          />
          )
        }
       
    </View>
  )
}

export default ContactScreen