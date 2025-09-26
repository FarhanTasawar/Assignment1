import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Text, Alert, StyleSheet } from "react-native";
import OfferCard from "../components/OfferCard";

const DUMMY_OFFERS = [
  { id: "1", title: "Python Tutoring", user: "Ali", description: "Data Structures & Algorithms (1hr)" },
  { id: "2", title: "Guitar Lessons", user: "Fatima", description: "Beginner chords, 30 min" },
  { id: "3", title: "Drawing Basics", user: "Ahmed", description: "Sketching techniques (1hr)" },
  { id: "4", title: "Yoga & Meditation", user: "Sara", description: "Relaxation & breathing (45 min)" },
];

export default function HomeScreen({ route }) {
  const [offers, setOffers] = useState(DUMMY_OFFERS);

  useEffect(() => {
    if (route.params?.newOffer) {
      setOffers((prev) => [route.params.newOffer, ...prev]);
    }
  }, [route.params?.newOffer]);

  const handleBook = (offer) => {
    Alert.alert("Booked", `You booked: ${offer.title}`, [{ text: "OK" }]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={offers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OfferCard offer={item} onBook={handleBook} />}
        ListHeaderComponent={
          <Text style={styles.header}>Home — Skill Offers</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: { padding: 12 },
  header: { fontSize: 22, fontWeight: "700", marginBottom: 10 },
});
