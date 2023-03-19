import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  return (
    <Router>
      <div className="grid-container">
        <title>Purple Vipers</title>

        <body>
          <div>
            <header className = "header">
                <div className="brand">
                    <button onClick={openMenu}>&#9776;</button>
                    <a href="index.html">Purple Vipers</a>
                </div>
                <div className="header-links">
                    <Link to="/">Home</Link>
                    <Link to="/catalog">Catalog</Link>
                </div>
            </header>
          </div>

          <aside className="sidebar">
              <h3>Shopping Categories</h3>
              <button className="sidebar-close-button" onClick={closeMenu}>x</button>
              <ul>
                  <li>
                      <a href="index.html">Pants</a>
                  </li>

                  <li>
                      <a href="index.html">Shirts</a>
                  </li>
              </ul>
          </aside>

          <main className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Products />} />
              </Routes>
          </main>
        
          <footer>
              &copy; 2023 Purple Vipers
          </footer>

        </body>
      </div>
    </Router>
  );
}

export default App;
