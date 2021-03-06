import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'

interface PropTypes {
    color: string
    title: string
    navigateName: string
}

const PADDING = 20

const HomeSlidesComponent: React.FC<PropTypes> = (props) => {
    const { color, title, navigateName }  = props
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: color}]} activeOpacity={.7} onPress={() => navigation.navigate(navigateName)}>
            <Text style={[styles.title]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: PADDING,
        height: 150,
        width: 265,
        borderRadius: PADDING,
        margin: PADDING / 2
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    }
})


export default HomeSlidesComponent