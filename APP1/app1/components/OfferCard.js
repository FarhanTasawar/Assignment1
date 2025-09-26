import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function OfferCard({ offer, onBook }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{offer.title}</Text>
      <Text style={styles.cardSubtitle}>By {offer.user}</Text>
      <Text style={styles.cardDesc}>{offer.description}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onBook(offer)}>
        <Text style={styles.buttonText}>Book</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eee",
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  cardTitle: { fontSize: 16, fontWeight: "700" },
  cardSubtitle: { fontSize: 12, color: "#666", marginBottom: 6 },
  cardDesc: { marginBottom: 8, color: "#333" },
  button: {
    backgroundColor: "#111",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "700" },
});
