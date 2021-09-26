import React from 'react'
import {View, Text, StyleSheet, Button, Platform} from 'react-native'
import Colors from '../constants/Colors'
import { CATEGORIES } from '../data/dummy-data'


const CategoryMealsScreen = props => {

    const {navigation} = props

    const catId = navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)

    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Details" 
                onPress={() => {
                    navigation.navigate({routeName: 'MealDetail'})
                }} />
            <Button title="Go Back" 
                onPress={() => {
                    navigation.goBack()
                }} />
        </View>
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen