import React from 'react'
import {View, 
    Text, 
    StyleSheet, 
    FlatList, 
    Button,
TouchableOpacity, Platform} from 'react-native'
import CategoryGridTitle from '../components/CategoryGridTile'
import Colors from '../constants/Colors'

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
        // <View style={styles.screen}>
        //     <Text>The Categories Screen!</Text>
        //     <Button title="Go to Meals" 
        //         onPress={() => {
        //             navigation.navigate({routeName: 'CategoryMeals'})
        //         }} />
        // </View>
        <FlatList 
            keyExtractor={(item, index) => item.id}
            renderItem={renderGridItem}
            data={CATEGORIES} 
            numColumns={2}
        />
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
        height: 150
    }
})

export default CategoriesScreen