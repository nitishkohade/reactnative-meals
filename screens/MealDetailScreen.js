import React, { useEffect, useCallback } from 'react'
import {View, Text, StyleSheet, Button, Image} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import { ScrollView } from 'react-native-gesture-handler'
import DefaultText from '../components/DefaultText'
import { useSelector , useDispatch } from 'react-redux'
import { toggleFavorite } from '../store/actions/meals'

const ListItem = props => {
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
}

const MealDetailScreen = props => {

    const {navigation} = props

    const mealId = navigation.getParam('mealId')
    const MEALS = useSelector(state => state.meals.meals)

    const currentMealIsFavorite = useSelector(
        state => state.meals.favoriteMeals.some(meal => meal.id === mealId)
    )

    const Meal = MEALS.find(meal => meal.id === mealId)

    const {
        id,
        imageUrl, 
        duration, 
        complexity, 
        affordability,
        ingredients,
        steps
    } = Meal

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(id));
    }, [dispatch, id])

    useEffect(() => {
        navigation.setParams({
            toggleFav: toggleFavoriteHandler
        })
    }, [toggleFavoriteHandler])

    useEffect(() => {
        navigation.setParams({
            isFav: currentMealIsFavorite
        })
    }, [currentMealIsFavorite])

    return (
        <ScrollView>
            <Image source={{uri: imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{duration}m</DefaultText>
                <DefaultText>{complexity.toUpperCase()}</DefaultText>
                <DefaultText>{affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {
                ingredients.map(ingredient => {
                    return (
                        <ListItem key={ingredient}>{ingredient}</ListItem>
                    )
                })
            }
            <Text style={styles.title}>Steps</Text>
            {
                steps.map(step => {
                    return (
                        <ListItem key={step}>{step}</ListItem>
                    )
                })
            }
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = navigationData => {
    const title = navigationData.navigation.getParam('mealTitle')
    const toggleFavorite = navigationData.navigation.getParam('toggleFav')
    const isFavorite = navigationData.navigation.getParam('isFav')
    return {
        headerTitle: title,
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="Favorites" 
                        iconName={isFavorite ? "ios-star" : "ios-star-outline"}
                        onPress={() => toggleFavorite()} />
                </HeaderButtons>
            )
        }
    }
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})

export default MealDetailScreen