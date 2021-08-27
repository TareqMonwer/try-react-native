import React from "react";
import { Text, TextInput, StyleSheet } from "react-native";
import { isHexColor } from "../utils/validators";

const HexColorInput = () => {
  const [color, setColor] = React.useState("#000000");
  const handleSetColor = (hexCode) => {
    if (isHexColor(hexCode)) {
      setColor(`#${hexCode}`);
    } else {
      setColor(color);
    }
  };
  return (
    <>
      <Text
        style={{
          color: color,
          fontSize: "1rem",
          margin: ".5rem",
          fontWeight: "bold",
        }}
      >
        Change My Color :)
      </Text>
      <TextInput
        style={styles.input}
        placeholder='Enter a valid color'
        onChangeText={(input) => handleSetColor(input)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: ".3rem",
    fontSize: "1rem",
    border: "1px solid #fff",
  },
});

export default HexColorInput;
