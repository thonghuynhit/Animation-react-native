import React from 'react'
import { View, FlatList, SafeAreaView, StyleSheet } from 'react-native'
import {SLIDE_DATA} from '../containers/HomeData'
import HomeSlidesComponent from '../components/HomeSlidesComponent'

export default function HomeScreen() {
    return (
        <View>
           <SafeAreaView>
               <FlatList
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled
                    horizontal
                    data={SLIDE_DATA}
                    keyExtractor={(_, index: number) => index.toString()}
                    renderItem={({item}) => (
                        <HomeSlidesComponent title={item.title} color={item.color} navigateName={item.navigateName} />
                    )}
                    style={[styles.flatlist]}
               />
           </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    flatlist: {

    }
})