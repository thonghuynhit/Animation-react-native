import React, { useEffect, useState, useRef } from 'react'
import { View, Text, FlatList, Image, StyleSheet, Animated, RefreshControl } from 'react-native'
import axios from 'axios'
import { TEXTCOLOR, MAINCOLOR, } from '../constrans/StylexConstrans'
import faker from 'faker'
import LoadingComponent from '../components/LoadingComponent'

faker.seed(10)
const SPACING = 20
const AVATARSIZE = 56
const ITEMSIZE = AVATARSIZE + SPACING * 3

export default function ListDetailsScreen() {
    const [dataList, setDataList] = useState<any[]>([])
    const [refreshing, setRefreshing] = useState<boolean>(false)
    const scrollY = useRef(new Animated.Value(0)).current

    useEffect(() => {
        fetchListUserApi(1)
    }, [])

    const fetchListUserApi = async (id: number) => {
        const { data } = await axios.get(`https://reqres.in/api/users?page=${id}`)
        setDataList((prevState: any) => [...prevState, ...data.data])
    }

    const handleRefreshing = () => {
        setRefreshing(true)
        setTimeout(() => setRefreshing(false), 3000)
    }

    return (
        <View>
            <Image 
                source={require('../assets/images/backgroundListDetails.jpg')}
                style={StyleSheet.absoluteFillObject}
            />
            <Animated.FlatList
                data={dataList}
                extraData={dataList}
                style={{height: '100%'}}
                contentContainerStyle={{
                    padding: SPACING,
                }}
                refreshing={refreshing}
                onRefresh={handleRefreshing}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: {y: scrollY }} }],
                    { useNativeDriver: false }
                )}
                keyExtractor={(item: any, index: number) => item.id.toString() + index}
                renderItem={({item, index}) => {
                    const inputRange = [
                        -1,
                        0,
                        ITEMSIZE * index,
                        ITEMSIZE * (index + 1),
                    ]

                    const inputOpacity = [
                        -1,
                        0,
                        ITEMSIZE * index,
                        ITEMSIZE * (index + 1),
                    ]

                    const scale = scrollY.interpolate({
                        inputRange,
                        outputRange: [.9993, 1, 1, 0]
                    })

                    const opacity = scrollY.interpolate({
                        inputRange: inputOpacity,
                        outputRange: [.997, 1, 1, 0]
                    })

                    return <Animated.View style={{...styles.listContainer, transform: [{scale}], opacity}}>
                        <Image source={{uri: item.avatar}} style={styles.listAvatar} />
                        <View style={styles.listContent}>
                            <Text style={styles.listUsername}>{item.first_name} {item.last_name}</Text>
                            <Text style={styles.listJobs}>{faker.name.jobTitle().length > 30 ? faker.name.jobTitle().slice(0, 29) + "..." : faker.name.jobTitle()}</Text>
                            <Text style={styles.listEmail}>{item.email}</Text>
                        </View>
                    </Animated.View>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, .85)',
        marginVertical: SPACING * 0.25,
        alignItems: 'center',
        padding: SPACING * 0.5,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            height: 10,
            width: 0,
        },
        shadowOpacity: .3,
        shadowRadius: 20,
    },
    listContent: {
        justifyContent: 'space-around',
    },
    listUsername: {
        color: TEXTCOLOR,
        fontSize: 20,
        fontWeight: '700',
    },
    listJobs: {
        color: '#666',
        fontSize: 16,
        fontWeight: '500'
    },
    listEmail: {
        color: MAINCOLOR,
        fontSize: 15,
        fontWeight: '500',
    },
    listAvatar: {
        height: AVATARSIZE,
        width: AVATARSIZE,
        borderRadius: AVATARSIZE,
        marginRight: SPACING * 0.5,
    }
})