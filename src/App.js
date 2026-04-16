import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Categories from "./Components/Categories";
import Subscribe from "./Components/Subscribe";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar">
          <h2>Daily Pulse</h2>
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
              <Route path="/subscribe" element={<Subscribe />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
