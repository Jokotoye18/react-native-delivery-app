import React from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import {styles} from './Styles'
import {globalStyles} from '../../../styles'
import { hp, wp } from '../../../utils/responsiveDesign'
import Ionicon from 'react-native-vector-icons/Ionicons';


const Index = ({navigation, route}) => {

    const {country, description, image, name, price, type} = route.params.item

    return (
        <SafeAreaView style={[globalStyles.container, {alignItems: 'flex-start'}]}>
            <ScrollView>
                <Image style={styles.img} source={image} />
                <ImageBackground style={styles.background} source={image}>
                <View style={styles.itemContent}>
                    <View style={{paddingHorizontal: wp(20)}}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.row}>
                        <Text style={styles.price}>{price}</Text>
                        <Text style={styles.unit}>$ / price</Text>
                    </View>
                    <Text style={styles.size}>150g / pieces</Text>
                    <Text style={styles.country}>{country}</Text>
                    <Text style={styles.description}>{description}</Text>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={[styles.btn1]}>
                            <Ionicon name='ios-heart-empty' color='#000' />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn2, {alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}]}>
                            <Ionicon name='ios-cart' color='#ffffff' />
                            <Text style={styles.cartText}>add to cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Index
