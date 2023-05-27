import React from "react";
import PokemonCard from "../Card/PokemonCard";

export type PokeCard = {
  image: string
  name : string,
  types: string[]
}

interface MainProps {
  data : PokeCard[]
}

export const Main: React.FC<MainProps>  = (props : MainProps) => {
  const cards = props.data.map((pokemon : PokeCard) => {
    return <PokemonCard card={ pokemon } />
  })

  return (
    <main>
      { cards }
    </main>
  )
}

