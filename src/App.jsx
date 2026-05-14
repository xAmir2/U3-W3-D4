import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import Favourites from "./components/Favourites";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="text-center my-3">
        <Link to="/">Home</Link> | <Link to="/favourites">Favourites</Link>
      </div>

      <Routes>
        <Route path="/" element={<MainSearch />} />

        <Route path="/favourites" element={<Favourites />} />

        <Route path="/:company" element={<CompanySearchResults />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
