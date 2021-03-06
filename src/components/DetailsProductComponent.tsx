import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions, Animated} from 'react-native'
import {BGCOLOR, MAINCOLOR, TEXTCOLOR} from '../constrans/StylexConstrans'

interface TypeProps {
    image: any
    name: string
    description: string
    index: number
    scrollX: any

}

const IMAGE_SIZE = 200
const SCREEN_WIDTH = Dimensions.get('screen').width

const DetailsPropductComponent: React.FC<TypeProps> = (props) => {
    const {image, name, description, index, scrollX} = props
    const inputRange = [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH]
    const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0, 1, 0]
    })
    return (
        <View style={[styles.container, {transform: [{scale}]}]}>
            <Animated.Image source={image} style={[styles.image]} />
            <View style={[styles.containerContent]}>
                <Text style={[styles.title]}>{name}</Text>
                <Text style={[styles.description]}>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    image: {
        height: SCREEN_WIDTH,
        width: SCREEN_WIDTH,
        resizeMode: 'contain',
    },
    containerContent: {
        width: SCREEN_WIDTH,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: TEXTCOLOR,
        paddingHorizontal: 10,
        paddingLeft: 50,
        paddingRight: 10,
    },
    description: {
        padding: 10,
        color: '#999',
        paddingLeft: 50,
        paddingRight: 10,
    }
})

export default DetailsPropductComponent