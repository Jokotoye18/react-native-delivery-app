import React, { useContext, useState, useReducer, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  Button,
} from "react-native";
import { globalStyles } from "../../../styles";
import { hp, wp } from "../../../utils/responsiveDesign";
import { styles } from "./Styles";
import { ItemContext } from "../../../context/ItemContext";
import Search from "../../shared/Search";
import ItemCard from "./ItemCard";
import { Reducer } from "./Reducer";
import UniqueItem, { uniqueItemStyle } from "./UniqueItem";
import { getUnique } from "./helper";

const Index = ({ navigation, route }) => {
  const { getCategory } = useContext(ItemContext);

  let { categoryId } = route.params;

  const { id, image, items: DATA, name } = getCategory(categoryId);

  const uniqueElement = getUnique(DATA);

  const formatUniqueItem = () => {
    return uniqueElement.map((item) => {
      return {
        item,
        active: item == "all" ? true : false,
      };
    });
  };

  const UNIQUEITEM = formatUniqueItem();

  const [uniqueItems, dispatch] = useReducer(Reducer, formatUniqueItem());

  useEffect(() => {}, [uniqueItems]);

  const FILTERDATA = () => {
    const getActive = uniqueItems.find(
      (item) => item.active && item.item !== "all"
    );
    if (getActive) {
      return DATA.filter((item) => item.type == getActive.item);
    }
    return DATA;
  };

  return (
    <SafeAreaView style={[globalStyles.container, { alignItems: "center" }]}>
      {/* <Image style={styles.img} source={image} /> */}
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.searchContainer}>
              <Search />
            </View>
            <ActiveItems dispatch={dispatch} uniqueItems={uniqueItems} />
          </>
        }
        data={FILTERDATA()}
        keyExtractor={(item) => `${item.name} ${item.price}`}
        renderItem={({ item }) => (
          <ItemCard item={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

export default Index;

const ActiveItems = ({ uniqueItems, dispatch }) => {
  const itemComp = uniqueItems.map((item) => (
    <UniqueItem item={item} key={item.item} dispatch={dispatch} />
  ));

  return <View style={uniqueItemStyle.row}>{itemComp}</View>;
};
