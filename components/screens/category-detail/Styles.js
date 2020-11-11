import { StyleSheet } from "react-native";
import { hp, wp } from "../../../utils/responsiveDesign";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  title: {
    color: colors.TextPrimary,
    fontSize: hp(34),
    marginVertical: hp(27),
    fontWeight: "bold",
    lineHeight: hp(41),
    height: hp(41),
  },
  searchContainer: {
    marginBottom: hp(42),
  },
  img: {
    width: wp(210.6),
    height: hp(209.8),
    marginLeft: wp(243.7),
    position: "absolute",
    top: hp(0),
    left: wp(0),
    resizeMode: "cover",
    marginTop: hp(-70),
  },
});
