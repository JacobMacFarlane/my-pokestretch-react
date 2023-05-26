import React from "react";

type CardProps = {
    obj: {
        images: {
            large: string
        }
        name: string
        types: string[]
    }
}

const PokemonCard: React.FC<CardProps> = ({ obj }) => {
    return (
        <div>
            <img src={obj.images.large} alt={obj.name} height="100px" />
            <div className="cardInfo">
                <h1>{obj.name}</h1>
                <p>{obj.types}</p>
            </div>
        </div>
    )
}

export default PokemonCard