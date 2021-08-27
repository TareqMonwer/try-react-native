import React from "react";
import { View, Button } from "react-native";
import { StyleSheet } from "react-native-web";

const Middle = ({setName}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Press me"
        onPress={() => setName('John')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
});

export default Middle;
