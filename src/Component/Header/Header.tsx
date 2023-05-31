import React from "react";
import './Header.css'
import { Link } from "react-router-dom"
import pkmntitle from '../../assets/pkmn-deck-builder-2.png'
import favs from '../../assets/favs-text.png'

export const Header: React.FC = () => {
  return (
    <header className="nav-header">

    <div className="logo-and-favs-btn">
      <Link to="/">
        <img src={pkmntitle} className="logo-img" alt="Logo" />
      </Link>

        <Link to="/favorites">
          <img src={favs} className="fav-img"/>
        </Link>
    </div>

      <nav className="navbar">
        <h1 className="banner">Welcome, Trainer!</h1>
        <h3>Browse cards and build your deck</h3>
      </nav>

    </header>
  )
}