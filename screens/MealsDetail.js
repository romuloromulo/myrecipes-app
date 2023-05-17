import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Button,
  Pressable,
} from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

function MealsDetail({ route, navigation }) {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.data.id;
  const catchId = route.params.data.categoryIds;

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const selectedMeal = MEALS.find(
    (category) => category.categoryIds === catchId
  );

  const {
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
  } = selectedMeal;

  function toggleFavoriteHandler() {
    if (mealIsFavorite) {
      dispatch(
        removeFavorite({
          id: mealId,
        })
      );
    }
    if (!mealIsFavorite) {
      dispatch(
        addFavorite({
          id: mealId,
        })
      );
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerRight: () => {
        return (
          <Pressable>
            <IconButton
              color="white"
              icon={mealIsFavorite ? "star" : "star-outline"}
              onPress={toggleFavoriteHandler}
            />
          </Pressable>
        );
      },
    });
  }, [navigation, toggleFavoriteHandler]);

  // Funçao para usar com Flatlist, porém flatlist não é suportado com ScrollView corretamente.
  // function renderIngredients(itemData) {
  //   return (
  //     <View style={styles.ingredientItem}>
  //       <Text style={styles.textItem}>{itemData.item}</Text>
  //     </View>
  //   );
  // }

  return (
    <ScrollView style={styles.root}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.title}> {title}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}m</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>
          {ingredients.map((ingredients) => {
            return (
              <View style={styles.ingredientItem}>
                <Text style={styles.textItem} key={Math.random()}>
                  {ingredients}
                </Text>
              </View>
            );
          })}

          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>
          {steps.map((steps) => {
            return (
              <View style={styles.ingredientItem}>
                <Text style={styles.textItem} key={Math.random()}>
                  {steps}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

export default MealsDetail;

const styles = StyleSheet.create({
  root: { marginBottom: 60 },
  innerContainer: {
    borderBottomColor: "#cccc",
    borderBottomWidth: 1,
    borderBottomStartRadius: "50%",
    borderBottomEndRadius: "50%",
  },
  teste: { alignItems: "center" },

  image: {
    height: 200,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
    color: "#170904",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: "#eb5e28",
  },
  ingredientItem: {
    margin: 6,
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: "#eb5e28",
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  textItem: {
    textAlign: "center",
    color: "#403D39",
    fontWeight: "500",
  },
  recipeContainer: {
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    height: "100%",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#403D39",
  },
  subtitleContainer: {
    margin: 4,
    padding: 6,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 2,
    marginVertical: 9,
    marginHorizontal: 100,
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
