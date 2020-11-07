import React from 'react'
import { StyleSheet} from 'react-native'
import {wp, hp} from '../../../utils/responsiveDesign'
import {colors} from '../../../utils/colors'


export const styles = StyleSheet.create({
    heroView: {
        height: hp(312)
    },
    logo: {
        width: 64,
        height: 64,
        backgroundColor: '#CDFFB6',
        borderRadius: 64 / 2 ,
        marginTop: hp(63),
        marginLeft: wp(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoText: {
        textTransform: 'uppercase',
        color: '#8C33FF',
        fontSize: hp(34)
    },
    contentView: {
        backgroundColor: '#F6F5F5',
        // height: hp(584)/
        flex: 1,
        borderWidth: 1,
        borderColor: '#F6F5F5',
        borderTopRightRadius: hp(30),
        borderTopLeftRadius: hp(30),
        alignItems: 'center'
    },
    box: {
        backgroundColor: '#ffffff',
        marginTop: hp(64),
        width: 104,
        height: 104,
        borderRadius: 104 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: wp(35),
        height: hp(40),
        resizeMode: 'cover'
    },
    title: {
        marginTop: hp(24),
        fontSize: hp(34),
        fontWeight: '700',
        lineHeight: hp(41),
        letterSpacing: hp(0.41),
        textAlign: 'center',
        width: wp(326),
        color: colors.TextPrimary
    },
    subtitle: {
        marginTop: hp(25),
        fontSize: hp(14),
        fontWeight: '400',
        lineHeight: hp(25.5),
        letterSpacing: hp(-0.41),
        textAlign: 'center',
        width: wp(374),
        color: colors.TextSecondary
    },
    btn: {
        marginTop: hp(48),
        width: wp(374),
        height: hp(56),
        backgroundColor: colors.PrimaryButton,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp(7)
    },
    btnText: {
        color: colors.White,
        fontWeight: '600',
        textTransform: 'uppercase'
    },
    dismiss: {
        marginTop: hp(32),
        textTransform: 'uppercase',
        color: colors.TextSecondary,
        fontWeight: '600',
    }
})