import { StyleSheet } from "react-native";
import { hp, wp } from "../../../utils/responsiveDesign";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  img: {
    resizeMode: "cover",
    width: wp(414),
    height: hp(358),
  },
  background: {
    height: hp(615),
    width: wp(414),
  },
  itemContent: {
    backgroundColor: "#F6F5F5",
    borderTopLeftRadius: hp(30),
    borderTopRightRadius: hp(30),
    borderWidth: 1,
    borderColor: "#F6F5F5",
    height: hp(615),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  name: {
    fontWeight: "700",
    fontSize: hp(30),
    color: colors.TextPrimary,
    marginTop: hp(37),
  },
  price: {
    fontWeight: "700",
    fontSize: hp(32),
    color: colors.TextPrimary,
    marginRight: wp(5),
  },
  unit: {
    fontWeight: "700",
    fontSize: hp(24),
    color: colors.TextSecondary,
  },
  size: {
    fontWeight: "500",
    fontSize: hp(17),
    color: colors.PrimaryButton,
  },
  country: {
    fontWeight: "700",
    fontSize: hp(22),
    color: colors.TextPrimary,
    marginBottom: hp(16),
    marginTop: hp(32),
  },
  description: {
    fontWeight: "400",
    fontSize: hp(17),
    color: colors.TextSecondary,
  },
  buttons: {
    marginTop: hp(56),
    flexDirection: "row",
    justifyContent: "center",
  },
  btn1: {
    width: wp(78),
    height: hp(56),
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: hp(7),
    marginRight: wp(21),
  },
  btn2: {
    width: wp(276),
    height: hp(56),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.PrimaryButton,
    borderRadius: hp(7),
  },
  cartText: {
    marginLeft: wp(5),
    textTransform: "uppercase",
    color: colors.White,
  },
});
