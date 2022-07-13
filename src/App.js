import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllEventsPage from "./pages/AllEvents";
import CardPage from "./pages/Card";
import Layout from "./components/layout/Layout";
import { useState, useEffect } from "react";
function App() {
  const [inCard, setInCard] = useState(0);
  const [events, setEvents] = useState([]);

  let eventsInCardNew = [];

  const [eventsInCard, setEventsInCard] = useState([]);

  function addToCard(event) {
    console.log(event);
    eventsInCardNew.push(event);
    setEventsInCard(eventsInCardNew);
    //setInCard(eventsInCard.length);
  }

  useEffect(() => {
    fetch("https://tlv-events-app.herokuapp.com/events/uk/london")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEvents(
          data.sort((a, b) =>
            a.title > b.title ? 1 : b.title > a.title ? -1 : 0
          )
        );
      });
  }, []);
  console.log(events);
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
