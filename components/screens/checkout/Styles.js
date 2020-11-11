import { StyleSheet } from "react-native";
import { hp, wp } from "../../../utils/responsiveDesign";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: hp(22),
    fontWeight: "700",
    color: colors.TextPrimary,
    textTransform: "capitalize",
  },
  titleAction: {
    color: colors.SelectedViolet,
    fontWeight: "600",
    fontSize: hp(15),
    textTransform: "uppercase",
  },
  payment: {
    marginTop: hp(24),
    marginBottom: hp(34),
  },
  deliAddress: {
    marginTop: hp(48),
    marginBottom: hp(34),
  },
  deliOptions: {
    marginTop: hp(48),
    marginBottom: hp(34),
  },
  deliType: {
    marginTop: hp(16),
  },
  comp2Row: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  comp2TextStyle: {
    color: colors.TextSecondary,
    fontSize: hp(17),
    fontWeight: "normal",
    flexBasis: wp(197),
  },
  comp2IconStyle: {
    marginRight: wp(28),
  },
  option: {
    marginBottom: hp(40),
  },
  activeOption: {},
});
