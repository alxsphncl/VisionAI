import { StyleSheet, Text, View } from "react-native";

export default function ResultScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Result</Text>

      <Text>Waiting for Gemini response...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
