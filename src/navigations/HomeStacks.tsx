import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import DetailsProductScreen from '../screens/DetaisProductScreen'
import ShareElementScreen from '../screens/ShareElementScreen'

const HomeStack = createStackNavigator()

export default function HomeStacks() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
            />
            <HomeStack.Screen
                name="DetailsProductScreen"
                component={DetailsProductScreen}
            />
            <HomeStack.Screen
                name="ShareElementScreen"
                component={ShareElementScreen}
            />
        </HomeStack.Navigator>
    )
}