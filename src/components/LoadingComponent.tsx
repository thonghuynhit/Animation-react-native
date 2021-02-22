import React from 'react'
import { View, Image } from 'react-native'

export default function LoadingComponent() {
    return (
        <View>
            <Image 
                source={require('../assets/images/refesher.gif')}
                style={{
                    height: 48,
                    width: 48,
                }}
            />
        </View>
    )
}