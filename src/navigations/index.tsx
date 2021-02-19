import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabsNavigation from './BottomTabsNavigator'

export default function Index() {
    return (
        <NavigationContainer>
            <BottomTabsNavigation />
        </NavigationContainer>
    )
}