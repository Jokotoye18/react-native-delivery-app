import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "./Styles";
import { globalStyles } from "../../../styles";
import Favicon from "../../../assets/images/favicon.png";

const Index = () => {
  return (
    <SafeAreaView
      style={[globalStyles.container, { backgroundColor: "#A259FF" }]}
    >
      <View style={styles.heroView}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>D</Text>
        </View>
      </View>
      <View style={styles.contentView}>
        <View style={styles.box}>
          <Image style={styles.img} source={Favicon} />
        </View>
        <Text style={[styles.title]}>Non-Contact Deliveries</Text>
        <Text style={styles.subtitle}>
          When placing an order, select the option “Contactless delivery” and
          the courier will leave your order at the door.{" "}
        </Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
          <Text style={styles.btnText}>ORDER NOW</Text>
        </TouchableOpacity>
        <Text style={styles.dismiss}>Dismiss</Text>
      </View>
    </SafeAreaView>
  );
};

export default Index;
