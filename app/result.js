import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ResultScreen() {
  const { result, photo } = useLocalSearchParams();

  // remove asterisks
  const cleanResult = result?.replace(/\*/g, "");

  // split lines
  const lines = cleanResult?.split("\n").filter((line) => line.trim() !== "");

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.image} />

      <Text style={styles.title}>AI Analysis Result</Text>

      <ScrollView style={styles.scroll}>
        {lines?.map((line, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.result}>{line}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },

  image: {
    width: 250,
    height: 250,
    borderRadius: 15,
    marginTop: 30,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },

  scroll: {
    width: "100%",
    marginTop: 20,
  },

  box: {
    backgroundColor: "#eeeeee",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  result: {
    fontSize: 16,
    lineHeight: 22,
  },
});
