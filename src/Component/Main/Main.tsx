import React from "react";
import PokemonCard from "../Card/PokemonCard";

export type PokeCard = {
  image: string
  name : string,
  types: string[]
  cardId: string
}

interface MainProps {
  data : PokeCard[]
}

export const Main: React.FC<MainProps>  = (props : MainProps) => {
  console.log(props, 'inside main')
  const cards = props.data.map((pokemon : PokeCard, index: number) => {
    return <PokemonCard key={pokemon.cardId} card={ pokemon } />
  })

  return (
    <main>
      { cards }
    </main>
  )
}

