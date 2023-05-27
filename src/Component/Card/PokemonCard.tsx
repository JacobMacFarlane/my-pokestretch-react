import React from "react";

interface CardProps {
    card : PokeCard
    largeImage: string
}
interface PokeCard {
    id: string
    images: {
      large:string
    }
    name: string
    types: string[]
  }

const PokemonCard: React.FC<CardProps> = ({ card, largeImage } : CardProps ) => {
    return (
        <div>
            <img src={largeImage} alt={card.name} height="100px" />
            <div className="cardInfo">
                <h1>{card.name}</h1>
                <p>{card.types}</p>
            </div>
        </div>
    )
}

export default PokemonCard

