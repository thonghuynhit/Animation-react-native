import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import DetailsProductScreen from '../screens/DetailsProductScreen'
import ShareElementScreen from '../screens/ShareElementScreen'
import ListReanimatedScreen from '../screens/ListReanimatedScreen';

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
            <HomeStack.Screen
                name="ListReanimatedScreen"
                component={ListReanimatedScreen}
            />
        </HomeStack.Navigator>
    )
}