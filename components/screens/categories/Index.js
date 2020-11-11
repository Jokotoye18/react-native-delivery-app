import React, { useContext } from "react";
import { View, Text, SafeAreaView, FlatList, ScrollView } from "react-native";
import { ItemContext } from "../../../context/ItemContext";
import { styles } from "./Styles";
import { globalStyles } from "../../../styles";
import Search from "../../shared/Search";
import { hp, wp } from "../../../utils/responsiveDesign";
import CategoryCard from "./CategoryCard";

const Index = ({ navigation }) => {
  const { items: DATA } = useContext(ItemContext);

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        { paddingLeft: wp(15), alignItems: "center" },
      ]}
    >
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.title}>Categories</Text>
            <View style={styles.searchContainer}>
              <Search />
            </View>
          </>
        }
        data={DATA}
        keyExtractor={(item) => `${item.id}${item.name}`}
        renderItem={({ item }) => (
          <CategoryCard navigation={navigation} item={item} />
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default Index;
