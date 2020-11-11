import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { wp, hp } from "../../utils/responsiveDesign";
import { colors } from "../../utils/colors";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={[styles.row]}>
      <Icon style={styles.icon} name="search" color="black" size={16} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={colors.TextSecondary}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: hp(120),
    borderWidth: 0.2,
    borderColor: "gray",
    width: wp(378),
    height: hp(48),
  },
  icon: {
    flexBasis: "10%",
    paddingLeft: "5%",
  },
  input: {
    flexBasis: "85%",
    color: colors.TextSecondary,
  },
});
