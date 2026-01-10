import { Routes, Route } from "react-router-dom";

import   './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        {/* <Route path="/about" element={<Home />} /> */}
      </Routes>

    </div>
  );
}

export default App;
