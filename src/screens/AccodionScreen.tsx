import React, {useState, useRef} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import dataAccodion from '../containers/AccodionData'
import {Transition, Transitioning} from 'react-native-reanimated'

interface TypeProps {

}

// const transition = (
//     <Transition.Together>
//         <Transition.In type="fade" durationMs={200} />
//         <Transition.Change />
//         <Transition.Out type="fade" durationMs={200} />
//     </Transition.Together>
// )

const Accodion: React.FC<TypeProps> = (props) => {
    const [indexCurrent, setIndexCurrent] = useState<any>(null)
    const ref = useRef<any>()

    return (
        <ScrollView>
            <View 
                ref={ref}
                style={[styles.container]}
                // transition={transition}
            >
                {dataAccodion.map(({bg, color, name, subCategories}: any, index: number) => (
                    <TouchableOpacity style={[styles.card]} key={index} onPress={() =>  {
                        // ref.current.animateNextTransition()
                        setIndexCurrent(indexCurrent === index ? null : index)
                    }} activeOpacity={0.9}>
                        <View style={[styles.header, {backgroundColor: bg}]}>
                            <Text style={[styles.textHeader, {color}]}>{name}</Text>
                            {
                                indexCurrent === index && (
                                    <View style={[styles.subCategoriesList]}>
                                        {subCategories.map((item: string, index: number) => (
                                            <TouchableOpacity key={index}>
                                                <Text style={[styles.subItem, {color}]}>{item}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                )
                            }
                            
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    card: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    header: {
        padding: 15,
    },
    textHeader: {
        fontSize: 32,
        fontWeight: '900',
        letterSpacing: -2,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    subCategoriesList: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    subItem: {
        lineHeight: 30,
        letterSpacing: 1,
        fontSize: 20,
        fontWeight: '500',
    }

})

export default Accodion