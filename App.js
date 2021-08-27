import React from "react";
import Header from "./components/Header";
import Middle from "./components/Middle";
import { LIGHT, DARK } from "./constants/theme";
import Container from "./containers/Container";

export default function App() {
  const [theme, setTheme] = React.useState(LIGHT);
  const handleSetTheme = () => setTheme(!theme);

  return (
    <Container>
      <Header theme={theme} />
      <Middle theme={theme} setTheme={handleSetTheme} />
    </Container>
  );
}
