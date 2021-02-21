import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStacks from './HomeStacks'
import SettingStacks from './SettingStacks'
import ListDetailsStacks from './ListDetailsStacks'
import Icon from 'react-native-vector-icons/AntDesign'
import IconEntypo from 'react-native-vector-icons/Entypo'
import { MAINCOLOR } from '../constrans/StylexConstrans'



const TabBottom = createBottomTabNavigator()

export default function BottomTabsNavigation() {
    return (
        <TabBottom.Navigator initialRouteName="Home" tabBarOptions={{
            activeTintColor: MAINCOLOR,
            activeBackgroundColor: '#fdfdfd',
            labelStyle: {
                fontSize: 12,
                fontWeight: '500',
            },
            tabStyle: {
                paddingTop: 3,
            },
            style: {
                height: 52,
            }
        }}>
            <TabBottom.Screen 
                name="Home" 
                component={HomeStacks}
                options={{
                    tabBarIcon: ({color}) => <Icon name="home" size={28} color={color} />,
                    tabBarLabel: "Home", 
                }}
            />
            <TabBottom.Screen
                name="ListDetails"
                component={ListDetailsStacks}
                options={{
                    tabBarIcon: ({color}) => <IconEntypo name="list" size={28} color={color} />,
                    tabBarLabel: 'List Details'
                }}
            />
            <TabBottom.Screen 
                name="Setting" 
                component={SettingStacks} 
                options={{
                    tabBarIcon: ({color}) => <Icon name="setting" size={28} color={color} />,
                }}
            />
        </TabBottom.Navigator>
    )
}