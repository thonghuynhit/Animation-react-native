import React, {useState, useRef} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Animated, Dimensions} from 'react-native'
import dataProductDetails from '../containers/DetailsProductData'
import DetailsProductComponent from '../components/DetailsProductComponent'
import {BGCOLOR, MAINCOLOR} from '../constrans/StylexConstrans'

interface TypeProps {

}

const HEIGHT_TICKET = 40
const SCREEN_WIDTH = Dimensions.get('screen').width
const CIRCLE_SIZE =   SCREEN_WIDTH * .6

const DetailsProductScreen: React.FC<TypeProps> = () => {
    const scrollX = useRef<any>(new Animated.Value(0)).current


    return (
        <View style={[styles.container]}>
            <Ticket scrollX={scrollX} />
            <Circle scrollX={scrollX} />
            <Animated.FlatList
                data={dataProductDetails}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item, index}) => <DetailsProductComponent name={item.heading} description={item.description} image={item.image} index={index} scrollX={scrollX} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: true}
                )}
                // scrollEventThrottle={16}
            />
            <Pagination />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BGCOLOR,
    },

})

const Pagination = () => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginRight: 10,
            flex: 1,

        }}>
            {dataProductDetails.map(({key, color}) => (
                <View key={key}>
                    <View style={{backgroundColor: color, height: 16, width: 16, borderRadius: 8, margin: 10}}></View>
                </View>
            ))}
        </View>
    )
}
const Ticket = ({scrollX}: any) => {
    const inputRange = [-SCREEN_WIDTH, 0, SCREEN_WIDTH]

    const translateY = scrollX.interpolate({
        inputRange,
        outputRange: [HEIGHT_TICKET, 0, -HEIGHT_TICKET]
    })


    return (
        <View style={{position: 'absolute', zIndex: 1, height: HEIGHT_TICKET, overflow: 'hidden', marginLeft: 20, marginTop: 20}}>
            {dataProductDetails.map(({type}) => (
                <Animated.View style={{
                    top: 0,
                    left: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: [{translateY}],
                }}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: '800',
                        height: HEIGHT_TICKET,
                        
                    }}>{type}</Text>
                </Animated.View>
            ))}
        </View>
    )
}

const Circle = ({scrollX}: any) => {
    
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {dataProductDetails.map(({color}, index) => {
                const inputRange = [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH]
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0, 1, 0],
                    extrapolate: 'clamp'
                })

                return (<Animated.View style={{
                    transform: [{scale}],
                    backgroundColor: color,
                    height: CIRCLE_SIZE,
                    width: CIRCLE_SIZE,
                    borderRadius: CIRCLE_SIZE / 2,
                    position: 'absolute',
                    top: Dimensions.get('screen').height * 0.1

                }}></Animated.View>)})}
        </View>
    )
}

export default DetailsProductScreen