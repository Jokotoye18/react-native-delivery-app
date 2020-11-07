import React, {useState, useReducer} from 'react'
import Proptypes from 'prop-types';
import { View, Text, SafeAreaView, TouchableOpacity, Switch as NativeSwitch } from 'react-native'
import { Switch } from 'react-native-switch';
import { styles } from './Styles'
import {globalStyles} from '../../../styles'
import { hp, wp } from '../../../utils/responsiveDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../utils/colors'
import {DeliveryOptionReducer} from './Reducer'
import {initialState} from './Context'


const Index = ({navigation, route}) => {

    const [switched, setSwitched] = useState(true)

    const handleSwitch = () => {
        setSwitched(prevState => !prevState)
    }

    const [state, dispatch] = useReducer(DeliveryOptionReducer,initialState)
    const { deliveryOptions } = state

    return (
        <SafeAreaView style={[globalStyles.container, {paddingHorizontal: wp(20)}]}>
            <Comp1 title='Payment method' style={styles.payment}>
                <Text style={styles.titleAction}>change</Text>
            </Comp1>
            <Comp2 iconName='wallet-outline' subTitle='**** **** **** 4747' />
            <Comp1 title='Delivery Address' style={styles.deliAddress}>
                <Text style={styles.titleAction}>change</Text>
            </Comp1>
            <Comp2 iconName='home-outline' subTitle='Alexandra Smith Cesu 31 k-2 5.st, SIA Chili Riga LV–1012 Latvia' />
            <Comp1 title='Delivery options' style={styles.deliOptions}>
                <Text style={styles.titleAction}>change</Text>
            </Comp1>
            {deliveryOptions.map(option => {
                return(
                    <Comp2
                        list= {true}
                        key={option.option} 
                        style={styles.option}
                        id={option.id}
                        iconName={option.iconName} 
                        selected={option.active} 
                        subTitle={option.option}
                        dispatch={dispatch} 
                    />
                )
            })}
            
            <Comp1 title='Non-contact-delivery' style={styles.deliType}>
                <NativeSwitch 
                    onValueChange={handleSwitch}
                    value={switched}
                    ios_backgroundColor={colors.TextSecondary}
                    trackColor={{ false: "#767577", true: "#E2CBFF" }}
                    thumbColor= {switched? '#ffffff' : '#aaa'}
                />
            </Comp1>
            {/* <Button title='Go to payment' onPress={() => navigation.navigate('Payment')} /> */}
        </SafeAreaView>
    )
}

export default Index







const Comp1 = ({title, children, style}) => {
    return(
        <View style={[styles.row, style]}>
            <Text style={styles.title}>{title}</Text>
            {children}
        </View>
    )
}

Comp1.defaultProps = {
    style: null,
}

Comp1.Proptypes = {
    children: Proptypes.element.isRequired,
    title: Proptypes.string.isRequired,
    style: Proptypes.object
}

const Comp2 = ({id, list, iconName, subTitle, style, selected, dispatch}) => {
    

    return(
        <View style={selected && [styles.row, {alignItems: 'flex-start'}]}>
            <TouchableOpacity 
                activeOpacity={list? 0.7 : 1} 
                onPress={list && function() {
                    dispatch({
                        type: 'CHANGE_OPTION',
                        payload: id
                    })
                }} 
                style={[styles.comp2Row, style]}
            >
                <MaterialCommunityIcons style={styles.comp2IconStyle} name={iconName} color={selected? colors.SelectedViolet: colors.TextSecondary} size={selected? 20 : 20} />
                <Text style={[styles.comp2TextStyle, {color: selected? colors.SelectedViolet: colors.TextSecondary, fontWeight: selected? '600' : '400'}]}>{subTitle}</Text>
            </TouchableOpacity>
            {selected && <Ionicons name='ios-checkmark' color={colors.TextSecondary} size={40}  />}
        </View>
    )
}

Comp2.defaultProps = {
    style: null,
    selected: null,
    dispatch: null
}

