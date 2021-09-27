import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity,
    ImageBackground
} from 'react-native'
import DefaultText from './DefaultText'


const MealItem = props => {

    const {title, 
        onSelectMeal, 
        duration, 
        complexity, 
        affordability,
    image} = props

    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={onSelectMeal}>
            <View>
                <View style={{...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground 
                        style={styles.bgImage}
                        source={{uri: image}}>
                            <View style={styles.titleContainer}>
                                <Text 
                                    numberOfLines={1} 
                                    style={styles.title}>
                                        {title}
                                </Text>
                            </View>
                    </ImageBackground>
                    
                </View>
                <View style={{...styles.mealRow, ...styles.mealDetail}}>
                    <DefaultText>{duration}m</DefaultText>
                    <DefaultText>{complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{affordability.toUpperCase()}</DefaultText>
                </View>
            </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row'
    },
    mealItem: {
        width: '100%',
        height: 200,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },  
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
})

export default MealItem