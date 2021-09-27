import React from 'react'
import { StyleSheet, 
    Text, 
    TouchableOpacity, 
    View, 
    Platform,
TouchableNativeFeedback } from 'react-native'

const CategoryGridTitle = props => {

    let TouchableCmp = TouchableOpacity

    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    const {title, onSelect, color} = props
    return (
        <View style={styles.gridItem} >
            <TouchableCmp
                style={{flex: 1}}
                onPress={onSelect}>
                    <View style={{...styles.container, ...{backgroundColor: color}}}>
                        <Text style={styles.title} numberOfLines={2}>{title}</Text>
                    </View>
            </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 21,
        textAlign: 'right'
    }
})

export default CategoryGridTitle