import React from 'react'
import { StyleSheet } from 'react-native'
import {wp, hp} from './utils/responsiveDesign'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F6F5F5',
        height: hp(896),
        width: wp(414)
    }
})

