import * as FileSystem from "expo-file-system/legacy";
import { router, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { analyzeImage } from "../services/gemini";

export default function PreviewScreen() {
  const { photo } = useLocalSearchParams();

  async function handleAnalyze() {
    const base64 = await FileSystem.readAsStringAsync(photo, {
      encoding: "base64",
    });

    const result = await analyzeImage(base64);

    router.push({
      pathname: "/result",
      params: {
        result: result,
        photo: photo,
      },
    });
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.image} />

      <TouchableOpacity style={styles.button} onPress={handleAnalyze}>
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
