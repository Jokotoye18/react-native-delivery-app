import React from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'
import {} from './Styles'
import {globalStyles} from '../../../styles'

const Index = ({navigation, route}) => {
    return (
        <SafeAreaView style={globalStyles.container}>
            <Text>Hello at Payment</Text>
        </SafeAreaView>
    )
}

export default Index
