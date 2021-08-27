import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { purple, yellow } from "../constants/colors";
import { articlesData } from "../assets/articles";

const ArticlesList = () => {
  const [articles, setArticles] = React.useState(articlesData);

  return (
    <ScrollView style={styles.articlesContainer}>
      {articles.map((article) => (
        <View style={styles.articleBox} key={article.key}>
          <Text style={styles.articleTitle}>{article.title}</Text>
          <Text style={styles.articleContent}>{article.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  articlesContainer: {
    marginTop: "1rem",
  },
  articleBox: {
    padding: "1rem",
    marginLeft: "1rem",
    marginRight: "1rem",
    marginTop: ".5rem",
    marginBottom: ".5rem",
    backgroundColor: yellow,
  },
  articleTitle: {
    fontSize: "1rem",
    marginBottom: ".5rem",
  },
  articleContent: {
    color: purple,
  },
});

export default ArticlesList;
