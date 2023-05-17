import { StyleSheet, View, FlatList } from "react-native";

import MealItem from "./MealItem1";
function MealsList({ items, navigation }) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    function pressHandler() {
      navigation.navigate("MealsDetail", { data: itemData.item });
    }

    return (
      <MealItem
        title={item.title}
        imageUrl={item.imageUrl}
        ingredients={item.ingredients}
        steps={item.steps}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        isGlutenFree={item.isGlutenFree}
        isVegan={item.isVegan}
        isVegetarian={item.isVegetarian}
        isLactoseFree={item.isLactoseFree}
        onPress={pressHandler}
      />
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
