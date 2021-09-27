import React, { useEffect, useState, useCallback } from 'react'
import {View, Text, StyleSheet, Switch} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import Colors from '../constants/Colors'
import { useDispatch } from 'react-redux'
import {setFilters} from '../store/actions/meals'

const FilterSwitch = props => {
    return (
            <View style={styles.filterContainer}>
                <Text>{props.label}</Text>
                <Switch 
                    // trackColor={{true: Colors.primaryColor}}
                    // thumbColor={Colors.primaryColor}
                    value={props.state} 
                    onValueChange={props.onChange} />
            </View>
    )
}

const FiltersScreen = props => {

    const {navigation} = props

    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        const saveFilters = () => {
            const appliedFilters = {
                glutenFree: isGlutenFree,
                lactoseFree: isLactoseFree,
                vegan: isVegan,
                vegetarian: isVegetarian
            }
            dispatch(setFilters(appliedFilters))
        }
        navigation.setParams({save: saveFilters});
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])



    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch 
                label="Gluten Free"
                state={isGlutenFree}
                onChange={value => setIsGlutenFree(value)}
             />

            <FilterSwitch 
                label="Lactose Free"
                state={isLactoseFree}
                onChange={value => setIsLactoseFree(value)}
             />

            <FilterSwitch 
                label="Vegan"
                state={isVegan}
                onChange={value => setIsVegan(value)}
             />

            <FilterSwitch 
                label="Vegetarian"
                state={isVegetarian}
                onChange={value => setIsVegetarian(value)}
             />
            
        </View>
    )
}

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: "Filter Meals",
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title="Menu" 
                        iconName="ios-menu"  
                        onPress={() => {
                            navData.navigation.toggleDrawer();
                        }}
                    />
                </HeaderButtons>
            )
        },
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title="Save" 
                        iconName="ios-save"  
                        onPress={() => {
                            const saveParam = navData.navigation.getParam('save')
                            saveParam()
                        }}
                    />
                </HeaderButtons>
            )
        }
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
})

export default FiltersScreen