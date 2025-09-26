import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

export default function CreatePostScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = () => {
    if (!title.trim()) {
      return Alert.alert("Error", "Please enter a title");
    }
    const newOffer = {
      id: Date.now().toString(),
      title: title.trim(),
      user: "You",
      description: description.trim(),
    };
    navigation.navigate("Home", { newOffer });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create a Skill Offer</Text>
      <TextInput
        placeholder="Title (e.g., Python Tutoring)"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Short description"
        multiline
        numberOfLines={4}
        style={[styles.input, { height: 120 }]}
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#111",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "700" },
});
