import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListDetailsScreen from '../screens/ListDetailsScreen'
import { MAINCOLOR } from '../constrans/StylexConstrans'

const ListDetailsStack = createStackNavigator()

export default function ListDetailsStacks() {
    return (
        <ListDetailsStack.Navigator screenOptions={{
            headerTitleStyle: {
                color: MAINCOLOR,
            },
            headerShown: false
        }}>
            <ListDetailsStack.Screen 
                name="ListDetailScreen" 
                component={ListDetailsScreen} 
                options={{
                    title: 'List Details'
                }}
            />
        </ListDetailsStack.Navigator>
    )
}