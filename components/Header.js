import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header({name}) {
  return (
    <View style={styles.header}>
      <Text style={styles.whitetxt}>
        <Text style={[styles.largeTxt, styles.purple, styles.header]}>Hello! {name}</Text>
        <br />
        <Text>We're about to become rich by selling apps.</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    padding: "0.7rem",
    backgroundColor: "#2A0944",
  },
  largeTxt: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  purple: {
    color: "#FEC260",
  },
  whitetxt: {
    color: "#fff",
  },
});
