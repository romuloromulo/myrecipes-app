import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ImageBackground,
} from "react-native";

function CategoryGridTile({ title, color, imageUrl, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}>
        <View style={[styles.innerContainer]}>
          <ImageBackground style={styles.image} source={{ uri: imageUrl }}>
            <Text style={styles.title}>{title}</Text>
          </ImageBackground>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: { flex: 1 },
  buttonPressed: { opacity: 0.5 },

  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
  },
  title: {
    color: "white",
    fontSize: 22,
    lineHeight: 84,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",

    backgroundColor: "#000000c0",
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    borderRadius: 8,
    justifyContent: "center",
  },
});
