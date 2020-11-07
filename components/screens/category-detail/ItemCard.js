import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { hp, wp } from '../../../utils/responsiveDesign'
import { colors } from '../../../utils/colors'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Button = ({name, color, bgColor}) => {
    return(
        <TouchableOpacity style={[styles.btn, {backgroundColor: bgColor}]}>
            <Ionicons name={name} color={color} size={13} />
        </TouchableOpacity>
    )
}

const ItemCard = ({item, navigation}) => {
    const {image, name, price} = item

    const handlePress =() => {
        navigation.navigate('Item', {
            item,
            name
        })
    }

    return (
        <View style={[styles.row]}>
            <TouchableOpacity onPress={handlePress}  activeOpacity={0.8} style={styles.imgContainer}>
                <Image style={styles.img} source={image} />
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <View style={[styles.row, {justifyContent: 'flex-start', marginTop: hp(12)}]}>
                    <Text style={styles.price}>{price}</Text>
                    <Text style={styles.size}>$ / kg</Text>
                </View>
                <View style={[styles.row]}>
                    <View style={[{marginRight: wp(20)}]}>
                    <Button name='ios-heart-empty' bgColor='#fff' />
                    </View>
                    <View>
                    <Button name='ios-cart' bgColor={colors.PrimaryButton} color='#fff' />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ItemCard


const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: hp(40)
    },
    imgContainer: {
        flexBasis:  wp(177),
        height: hp(128),
        marginRight: wp(21),
        borderColor: 'red',
    },
    img: {
        width: wp(177),
        height: hp(128),
        resizeMode: 'cover',
        borderRadius: hp(7)
    },
    content: {
        flexBasis: wp(177),
        height: hp(128),
    },
    btn: {
        justifyContent: 'center', 
        alignItems: 'center',
        width: wp(78),
        height: hp(40),
        borderRadius: hp(7),
        marginTop: hp(30)
    },
    name: {
        fontSize: hp(18),
        fontWeight: '600',
        color: colors.TextPrimary
    },
    price: {
        fontSize: hp(22),
        fontWeight: '700',
        color: colors.TextPrimary,
        marginRight: wp(4)
    },
    size: {
        fontSize: hp(16),
        fontWeight: '400',
        color: colors.TextSecondary
    }
})