import React, {useState, useRef} from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import shareElementData from '../containers/ShareElementData'

export default function ShareElementScreen() {
    console.log(shareElementData)

    return <View style={[styles.container]}>
        <Text>Learning share element</Text>
    </View>
}
const styles = StyleSheet.create({
    container: {}
})