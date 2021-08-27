import React from "react";
import { View, Button } from "react-native";
import { StyleSheet } from "react-native-web";
import { navy, yellow } from "../constants/colors";
import { getThemeName } from "../utils/theme";

const Middle = ({ theme, setTheme }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme ? yellow : navy,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  const handleChangeTheme = () => {
    setTheme();
  };
  return (
    <View style={styles.container}>
      <Button
        title={`Switch to ${getThemeName(!theme)}`}
        onPress={() => handleChangeTheme()}
        color={theme ? navy : yellow}
      />
    </View>
  );
};

export default Middle;
