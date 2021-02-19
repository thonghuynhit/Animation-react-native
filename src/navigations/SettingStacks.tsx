import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SettingScreen from '../screens/SettingScreen'

const SettingStack = createStackNavigator()

export default function SettingStacks() {
    return (
        <SettingStack.Navigator>
            <SettingStack.Screen name="SettingScreen" component={SettingScreen} />
        </SettingStack.Navigator>
    )
}