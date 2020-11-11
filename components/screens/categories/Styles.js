import { StyleSheet } from "react-native";
import { hp, wp } from "../../../utils/responsiveDesign";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  title: {
    color: colors.TextPrimary,
    fontSize: hp(34),
    marginVertical: hp(17),
    fontWeight: "bold",
    lineHeight: hp(41),
    height: hp(41),
  },
  searchContainer: {
    marginBottom: hp(42),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
