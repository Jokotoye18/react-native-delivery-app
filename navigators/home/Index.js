import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import CategoriesScreen from '../../components/screens/categories/Index'
import CategoryDetailScreen from '../../components/screens/category-detail/Index'
import ItemScreen from '../../components/screens/Item/Index'
import {wp, hp} from '../../utils/responsiveDesign'


const HomeScreenStack = createStackNavigator();

const Index = () => {
    return (
        <HomeScreenStack.Navigator
            screenOptions={{
                headerStyle: {
                    height: hp(70)
                },
                headerTintColor: 'gray',
                headerTitleStyle: {
                    // display: 'none'
                },
                headerTitleAlign: 'center'
            }}
        >
            <HomeScreenStack.Screen 
                name='Category'
                component={CategoriesScreen}
                options={{
                    // headerShown: false
                    headerTitleStyle: {
                    display: 'none'
                },
                }}

            />
            <HomeScreenStack.Screen 
                name='CategoryDetail'
                component={CategoryDetailScreen}
                options={({route}) => ({
                    title: route.params.categoryName,
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerTitleStyle: {
                    display: 'none'
                },
                })}
            />
            <HomeScreenStack.Screen 
                name='Item'
                component={ItemScreen}
                options={({route}) => ({
                    headerShown: false
                })} 
            />
        </HomeScreenStack.Navigator>
    )
}

export default Index
