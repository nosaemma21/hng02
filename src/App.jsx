import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/*Application Routes*/}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
