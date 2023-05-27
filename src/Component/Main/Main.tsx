import React from "react";
import PokemonCard from "../Card/PokemonCard";



interface MainProps {
  data : MainPokeCard[]
}

interface MainPokeCard {
  id: string
  images: {
    large: string
  }
  name: string
  types: string[]
}

export const Main: React.FC<MainProps>  = (props : MainProps) => {
  console.log(props)
  const cards = props.data.map((pokemon : MainPokeCard) => {
    return (
    <PokemonCard 
    card={ pokemon } 
    key={pokemon.id}
    largeImage={pokemon.images.large}
    />
    )
  })

  return (
    <main>
      { cards }
    </main>
  )
}

