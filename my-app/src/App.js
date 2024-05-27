import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer"; // Добавлен импорт Footer
import Register from './pages/Register'; // Добавлен импорт Register
import Login from './pages/Login'; // Добавлен импорт Login
import Profile from './pages/Profile'; // Добавлен импорт Profile
import Home from './pages/Home'; // Добавлен импорт Home
import Sale from './pages/sale'; // Добавлен импорт Sale
import Games from './pages/Games'; // Добавлен импорт Games
import Giveaway from './pages/giveaway'; // Добавлен импорт Giveaway

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/giveaway" element={<Giveaway />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/sale" element={<Sale />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
