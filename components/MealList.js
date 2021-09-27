import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MealItem from './MealItem'
import {useSelector} from 'react-redux'

const MealList = props => {

    const {displayedMeals, navigation} = props

    const favoriteMeals = useSelector(
        state => state.meals.favoriteMeals
    )

    const renderMealItem = (itemData) => {
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id)
        const {title, 
            duration, 
            complexity, 
            affordability,
            imageUrl, id} = itemData.item
        return (
           <MealItem
                title={title} 
                duration={duration}
                complexity={complexity}
                affordability={affordability}
                image={imageUrl}
                onSelectMeal={() => {
                    navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: id,
                            mealTitle: title,
                            isFav: isFavorite
                        }
                    })
                }}
            />
        )
    }

    return (
        <View style={styles.list}>
            <FlatList 
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
})

export default MealList