import React from 'react';
import Header from './components/Header';
import Middle from './components/Middle';
import Container from './containers/Container';

export default function App() {
  const [name, setName] = React.useState("Tareq");
  return (
    <Container>
      <Header name={name} />
      <Middle setName={setName} />
    </Container>
  );
}

