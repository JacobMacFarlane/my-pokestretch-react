import React, { useState } from "react";
import { PokeCard } from "../App/App";

type CardProps = {
    card : PokeCard
    chooseCard: (PokeCard: {}) => void
}

export const PokemonCard: React.FC<CardProps> = ( props  : CardProps ) => {
    const [favorited, setFavorite ] = useState(false)
    const { card, chooseCard } = props

    const handleEvent =  () => {
        if (!favorited) {
            setFavorite(true)
            chooseCard(card)
        }
    }

    return (
        <div className="single-card-container">
            <img src={card.image} alt={card.name} height="100px" />
            <div className="cardInfo">
                <h1 className="title">{card.name}</h1>
                <p className="type">{card.types}</p>
            </div>
            { favorited === true ? <>the Button works</> : null }
            <button 
            name={card.name} 
            onClick={()=> handleEvent()} >Favorite</button>
        </div>
    )
}