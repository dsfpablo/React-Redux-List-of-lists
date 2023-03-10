import "./App.css";
import { Container } from "react-bootstrap";
import Lists from "./components/Lists/Lists";
import List from "./components/ItemsList/ItemsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <h1>HackList</h1>
        <Routes>
          <Route path="/" element={<Lists />} />
          <Route path="/:listId" element={<List />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
