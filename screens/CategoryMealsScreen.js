import React from 'react'
import MealList from '../components/MealList'
import { CATEGORIES } from '../data/dummy-data'
import { useSelector } from 'react-redux'
import { Text, View, StyleSheet } from 'react-native'


const CategoryMealsScreen = props => {

    const {navigation} = props

    const catId = navigation.getParam('categoryId')

    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    if(displayedMeals.length === 0) {
        return (
            <View style={styles.content}>
                <Text>Filtered Meals are not found.</Text>
            </View>
        )
    }

    return (
        <MealList
            displayedMeals={displayedMeals}
            navigation={navigation}
        />
    )
}

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)
    return {
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen