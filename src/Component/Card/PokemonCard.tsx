import React, { useState } from "react";
import { PokeCard } from "../App/App";
import './PokemonCard.css'

type CardProps = {
    card : PokeCard
    chooseCard: (PokeCard: PokeCard) => void
    removeFavorite: (card : PokeCard) => void
}

export const PokemonCard: React.FC<CardProps> = ( props  : CardProps ) => {
    const [favorited, setFavorite ] = useState(false)
    const { card, chooseCard, removeFavorite } = props

    const handleEvent =  () => {
        if (!favorited) {
            setFavorite(true)
            chooseCard(card)
        } else {
            removeFavorite(card)
            setFavorite(false)
        }
    }

    return (
        <div className="single-card-container">
            {favorited && (
                <div className="corner-pokeball">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="blue" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2c-4.08 0-7.45 3.05-7.94 7h4.07c.44-1.73 2.01-3 3.87-3c1.86 0 3.43 1.27 3.87 3h4.07c-.49-3.95-3.86-7-7.94-7m0 16c4.08 0 7.45-3.05 7.94-7h-4.07c-.44 1.73-2.01 3-3.87 3c-1.86 0-3.43-1.27-3.87-3H4.06c.49 3.95 3.86 7 7.94 7m0-10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"/></svg>
                </div>
            )}  
            <img src={card.image} alt={card.name} className="card-img"/>
            <div className="cardInfo">
                <h1 className="title">{card.name}</h1>
                <p className="type">{card.types}</p>
            </div>
            <button 
            className="favorite-button"
            name={card.name} 
            onClick={()=> handleEvent()}>
                { favorited  ? "Unfavorite" : "Favorite" }
            </button>
        </div>
    )
}