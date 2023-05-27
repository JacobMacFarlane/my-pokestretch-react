import React, { useState } from "react";
import { PokeCard } from "../Main/Main";


type CardProps = {
    card : PokeCard
}

const PokemonCard: React.FC<CardProps> = ({ card } : CardProps ) => {
    const [favorited, setFavorite ] = useState(false)
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
            onClick={()=> setFavorite(true)}>Favorite</button>
        </div>
    )
}

export default PokemonCard

