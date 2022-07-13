import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllEventsPage from "./pages/AllEvents";
import CardPage from "./pages/Card";
import Layout from "./components/layout/Layout";
import { useState, useEffect } from "react";
function App() {
  const [inCard, setInCard] = useState(0);
  const [events, setEvents] = useState([]);
  const [eventsInCard, setEventsInCard] = useState([]);

  let newValueInCard = eventsInCard.length;
  function addToCard(event) {
    setEventsInCard([...eventsInCard, event]);
    newValueInCard++;
    setInCard(newValueInCard);
  }

  useEffect(() => {
    fetch("https://tlv-events-app.herokuapp.com/events/uk/london")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const groups = data.reduce((groups, event) => {
          const date = event.date.split("T")[0];
          if (!groups[date]) {
            groups[date] = [];
          }
          groups[date].push(event);
          return groups;
        }, {});
        setEvents(groups);
      });
  }, []);
  return (
    <Router>
      <Layout inCard={inCard} eventsInCard={eventsInCard}>
        <Routes>
          <Route
            path="/"
            element={<AllEventsPage addToCard={addToCard} events={events} />}
          />
          <Route path="/card" element={<CardPage events={eventsInCard} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
