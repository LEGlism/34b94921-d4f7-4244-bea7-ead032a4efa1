import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllEventsPage from "./pages/AllEvents";
import CardPage from "./pages/Card";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<AllEventsPage />} />
          <Route path="/card" element={<CardPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
