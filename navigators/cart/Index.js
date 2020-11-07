import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Payment from '../../components/screens/payment/Index'
import Checkout from '../../components/screens/checkout/Index'
import { hp, wp } from '../../utils/responsiveDesign'


const CartStack = createStackNavigator()

const Index = () => {
    return (
        <CartStack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#F6F5F5',
                    height: hp(96)
                }
            }}
        >
            <CartStack.Screen 
                name='Checkout' 
                component={Checkout} 
                options={{}}

            />
            <CartStack.Screen 
                name='Payment' 
                component={Payment} />
        </CartStack.Navigator>
    )
}

export default Index
