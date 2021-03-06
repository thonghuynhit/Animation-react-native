import React, {useState, useRef} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Animated} from 'react-native'
import dataProductDetails from '../containers/DetailsProductData'
import DetailsProductComponent from '../components/DetailsProductComponent'
import {BGCOLOR, MAINCOLOR} from '../constrans/StylexConstrans'

interface TypeProps {

}

const DetailsProductScreen: React.FC<TypeProps> = () => {
    const scrollX = useRef<any>(new Animated.Value(0)).current


    return (
        <View style={[styles.container]}>
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
                scrollEventThrottle={16}
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

export default DetailsProductScreen