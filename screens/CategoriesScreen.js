import React from 'react'
import {View, 
    Text, 
    StyleSheet, 
    FlatList, 
} from 'react-native'
import CategoryGridTitle from '../components/CategoryGridTile'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = props => {

    const {navigation} = props

    const renderGridItem = (itemData) => {
        return (
           <CategoryGridTitle 
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={
                () => {
                    navigation.navigate({
                        routeName: 'CategoryMeals', 
                        params: {categoryId: itemData.item.id}
                    })
                }
            }
            />
        )
    }

    return (
        <FlatList 
            keyExtractor={(item, index) => item.id}
            renderItem={renderGridItem}
            data={CATEGORIES} 
            numColumns={2}
        />
    )
}

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: "Meal Categories",
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
        }
    }
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
        height: 150
    }
})

export default CategoriesScreen