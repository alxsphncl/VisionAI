// TEST IMPORT
import { router, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PreviewScreen() {
  const { photo } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.image} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/result")}
      >
        <Text style={styles.buttonText}>Analyze Image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },

  button: {
    marginTop: 30,
    backgroundColor: "#2E5BBA",
    padding: 15,
    borderRadius: 20,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
