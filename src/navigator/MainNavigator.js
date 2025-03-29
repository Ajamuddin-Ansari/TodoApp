import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import FirstPage from '../screens/FirstPage'


const Stack = createStackNavigator()

const MainNavigator = () => {
  return (
    // <View>
    //   <Text>MainNavigator</Text>
    // </View>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name='FirstPage'
            component={FirstPage}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator