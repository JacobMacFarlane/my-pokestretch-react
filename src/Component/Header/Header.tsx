import React from "react";
import './Header.css'
import { Link } from "react-router-dom"

export const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <img src="" alt="Logo" />
      </Link>
      <nav className="navbar">
        <Link to="/favorites">Favorites</Link>
        <h1 className="banner">POKEMON CARDS!</h1>
        <h3>Browse cards and build your deck</h3>
      </nav>
    </header>
  )
}