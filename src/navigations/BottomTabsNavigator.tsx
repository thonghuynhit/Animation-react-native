import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStacks from './HomeStacks'
import SettingStacks from './SettingStacks'

const TabBottom = createBottomTabNavigator()

export default function BottomTabsNavigation() {
    return (
        <TabBottom.Navigator initialRouteName="Home">
            <TabBottom.Screen name="Home" component={HomeStacks} />
            <TabBottom.Screen name="Setting" component={SettingStacks} />
        </TabBottom.Navigator>
    )
}