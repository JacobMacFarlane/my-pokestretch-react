import React from "react";
import './Header.css'

export const Header: React.FC = () => {
  return (
    <nav className="navbar">
      <h1 className="banner">POKEMON CARDS!</h1>
      <h3>Browse cards and build your deck</h3>
    </nav>
  )
}