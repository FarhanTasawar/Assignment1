import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  const [user] = useState({
    name: "Your Name",
    skills: ["React Native", "Guitar", "Photography"],
    bio: "A passionate student.",
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.label}>Name</Text>
      <Text style={styles.value}>{user.name}</Text>
      <Text style={styles.label}>Skills</Text>
      <Text style={styles.value}>{user.skills.join(", ")}</Text>
      <Text style={styles.label}>Bio</Text>
      <Text style={styles.value}>{user.bio}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "700" },
  label: { marginTop: 12, fontWeight: "600" },
  value: { marginBottom: 8 },
});
