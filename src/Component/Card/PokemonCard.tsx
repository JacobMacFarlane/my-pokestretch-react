import React from "react";

interface CardProps {
    card : any
}

const PokemonCard: React.FC<CardProps> = ({ card } : CardProps ) => {
    return (
        <div>
            <img src={card.images.large} alt={card.name} height="100px" />
            <div className="cardInfo">
                <h1>{card.name}</h1>
                <p>{card.types}</p>
            </div>
        </div>
    )
}

export default PokemonCard

