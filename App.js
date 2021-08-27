import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./components/Header";
import Middle from "./components/Middle";
import { LIGHT } from "./constants/theme";
import Container from "./containers/Container";
import ArticlesList from "./components/ArticlesList";

export default function App() {
  const [theme, setTheme] = React.useState(LIGHT);
  const handleSetTheme = () => setTheme(!theme);

  return (
    <Container>
      <View style={styles.firstView}>
        <Header theme={theme} />
        <Middle theme={theme} setTheme={handleSetTheme} />
      </View>
      <View>
        <ArticlesList />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  firstView: {
    minHeight: '100vh'
  }
})