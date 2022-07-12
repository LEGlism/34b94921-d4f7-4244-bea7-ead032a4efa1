import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllEventsPage from "./pages/AllEvents";
import CardPage from "./pages/Card";
import Layout from "./components/layout/Layout";
import { useState } from "react";
function App() {
  const [inCard, setInCard] = useState(0);
  function addToCard() {
    let newCardValue = inCard + 1;
    setInCard(newCardValue);
  }
  return (
    <Router>
      <Layout inCard={inCard}>
        <Routes>
          <Route path="/" element={<AllEventsPage addToCard={addToCard} />} />
          <Route path="/card" element={<CardPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
