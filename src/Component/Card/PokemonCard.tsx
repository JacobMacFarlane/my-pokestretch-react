import React, { useState } from "react";
import { PokeCard } from "../App/App";

type CardProps = {
    card : PokeCard
    chooseCard: (PokeCard: {}) => void
}

const PokemonCard: React.FC<CardProps> = ( props  : CardProps ) => {
    const [favorited, setFavorite ] = useState(false)
    const { card, chooseCard } = props

    const handleEvent =  () => {
        if (!favorited) {
            setFavorite(true)
            chooseCard(card)
        } else {
            setFavorite(false)
        }
    }

    return (
        <div className="single-card-container">
            <img src={card.image} alt={card.name} height="100px" />
            <div className="cardInfo">
                <h1 className="title">{card.name}</h1>
                <p className="type">{card.types}</p>
            </div>
            <button 
            name={card.name} 
            onClick={()=> handleEvent()} >
               
                { favorited  ? "Unfavorite" : "Favorite" }
            </button>
        </div>
    )
}

export default PokemonCard

