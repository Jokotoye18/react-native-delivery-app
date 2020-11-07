import React, {useContext} from 'react'
import { View, Text, SafeAreaView, Image, FlatList } from 'react-native'
import {globalStyles} from '../../../styles'
import { hp, wp } from '../../../utils/responsiveDesign'
import {styles} from './Styles'
import {ItemContext} from '../../../context/ItemContext'
import Search from '../../shared/Search'
import ItemCard from './ItemCard'


const getUnique = () => {
    return [...new Set()]
}

const Index = ({navigation, route}) => {

    const {getCategory} = useContext(ItemContext)

    let { categoryId } = route.params

    const {id, image, items: DATA, name} = getCategory(categoryId)


    return (
        <SafeAreaView style={[globalStyles.container, {alignItems: 'center'}]}>
            <Image style={styles.img} source={image} />
            <FlatList 
                ListHeaderComponent = {
                    <>
                        <Text style={styles.title}>{name}</Text>
                        <View style={styles.searchContainer}>
                            <Search />
                        </View>
                    </>
                }
                style={{}}
                data={DATA}
                keyExtractor={item => `${item.name} ${item.price}`}
                renderItem={({item}) => <ItemCard item={item} navigation={navigation} /> }
            />
        </SafeAreaView>
    )
}

export default Index
