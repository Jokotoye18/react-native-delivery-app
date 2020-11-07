import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { hp, wp } from '../../../utils/responsiveDesign'
import { colors } from '../../../utils/colors'


const CategoryCard = ({item, navigation}) => {

    const {id, name, image, items} = item

    const handlePress = () => {
        navigation.navigate('CategoryDetail', {
            categoryId: id,
            categoryName: name
        })
    }

    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.8} style={styles.categoryContainer}>
            <Image style={styles.categoryImg} source={image} />
            <Text style={styles.categoryName}>{name}</Text>
            <Text style={styles.categoryItems}>({items.length})</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard

const styles = StyleSheet.create({
    categoryContainer: {
        borderRadius: hp(5),
        borderColor: colors.Border,
        borderWidth: 0.3,
        marginBottom: hp(20),
        marginRight: wp(20),
    },
    categoryImg: {
        resizeMode: 'cover',
        height: hp(140),
        width: wp(177),
        borderTopLeftRadius: hp(5),
        borderTopRightRadius: hp(5),
        borderColor: colors.Border,
        borderWidth: 0.3,
    },
    categoryName: {
        color: colors.TextPrimary,
        marginHorizontal: wp(16),
        marginVertical: hp(10),
        fontWeight: '700',
        fontSize: hp(18)
    },
    categoryItems: {
        color: colors.TextSecondary,
        marginLeft: wp(16),
        marginBottom: hp(17),
        fontWeight: '400',
        fontSize: hp(16)
    }
})
