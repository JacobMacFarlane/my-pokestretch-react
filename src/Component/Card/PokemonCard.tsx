import React, { useState } from "react";
import { PokeCard } from "../Main/Main";


type CardProps = {
    card : PokeCard
    chooseCard: (PokeCard: {}) => void
}

const PokemonCard: React.FC<CardProps> = ( props  : CardProps ) => {
    const [favorited, setFavorite ] = useState(false)
    const { card, chooseCard } = props
    const handleEvent =  () => {
        setFavorite(true)
        chooseCard(card)
    }

    return (
        <div className="pokemon-card">
            <img src={card.image} alt={card.name} height="100px" />
            <div className="cardInfo">
                <h1>{card.name}</h1>
                <p>{card.types}</p>
            </div>
            { favorited === true ? <>the Button works</> : null }
            <button 
            name={card.name} 
            onClick={()=> handleEvent()} >Favorite</button>
        </div>
    )
}

export default PokemonCard

