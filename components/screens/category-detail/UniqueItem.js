import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { hp, wp } from "../../../utils/responsiveDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../../../utils/colors";


const UniqueItem = ({ item: element, dispatch }) => {
  const { active, item } = element;

  return (
    <TouchableOpacity
      onPress={() =>
        dispatch({
          type: "SET_ACTIVE",
          payload: item,
        })
      }
      activeOpacity={0.7}
      style={[
        uniqueItemStyle.checkmarkItemRow,
        { backgroundColor: active ? "#E2CBFF" : "#ffffff" },
      ]}
    >
      {active && (
        <View>
          <Ionicons name="ios-checkmark" color="#6C0EE4" size={25} />
        </View>
      )}
      <Text
        style={[
          uniqueItemStyle.itemType,
          {
            color: active ? "#6C0EE4" : colors.TextSecondary,
            marginLeft: !active ? -wp(2) : wp(8),
          },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default UniqueItem;

export const uniqueItemStyle = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: hp(22),
    width: wp(378),
  },
  itemType: {
    marginLeft: wp(12),
    fontSize: hp(14),
    fontWeight: "500",
  },
  checkmarkItemRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: hp(50),
    paddingVertical: hp(6),
    paddingHorizontal: wp(15),
    marginBottom: hp(26),
    marginRight: wp(8),
    height: hp(34),
  },
});
