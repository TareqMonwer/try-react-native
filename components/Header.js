import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { navy, yellow } from "../constants/colors";
import { getThemeName } from "../utils/theme";

export default function Header({ theme }) {
  const styles = StyleSheet.create({
    header: {
      textAlign: "center",
      padding: "0.7rem",
      backgroundColor: theme ? navy : yellow,
    },
    largeTxt: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: theme ? yellow : navy,
    },
    whiteTxt: {
      color: "#fff",
    },
  });

  return (
    <View style={styles.header}>
      <Text style={styles.whiteTxt}>
        <Text style={[styles.largeTxt, styles.header]}>
          You're in {getThemeName(theme)}
        </Text>
        <br />
        <Text>This is a revolutionary app, can't you understand?</Text>
      </Text>
    </View>
  );
}
