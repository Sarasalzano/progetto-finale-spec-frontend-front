import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CardDetailPage from "./pages/CardDetailPage";
import FavouritesPage from "./pages/FavouritesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/carddetail" element={<CardDetailPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
