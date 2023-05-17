import { useLayoutEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealsList/MealItem1";
import MealsList from "../components/MealsList/MealsList";
import { MEALS, CATEGORIES } from "../data/dummy-data";
function MealsOverviewScreen({ route, navigation }) {
  const catchId = route.params.categoryId;

  const displayedMeals = MEALS.filter((metalItem) => {
    return metalItem.categoryIds.indexOf(catchId) >= 0;
  });

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === catchId
  ).title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, catchId]);

  return <MealsList items={displayedMeals} navigation={navigation} />;
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
