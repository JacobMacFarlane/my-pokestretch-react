import React from "react";
import { NavLink } from 'react-router-dom';
import PokemonCard from "../Card/PokemonCard";

export type PokeCard = {
  image: string
  name : string,
  types: string[]
  cardId: string
}

interface MainProps {
  data : PokeCard[]
  chooseCard: any
}

export const Main: React.FC<MainProps>  = (props : MainProps) => {
  console.log(props, 'inside main')
  const cards = props.data.map((pokemon : PokeCard, index: number) => {
    return <PokemonCard key={pokemon.cardId} card={ pokemon } chooseCard={props.chooseCard}/>
  })

  return (
    <main>
      <nav>
        <NavLink to="/favorites">Favorites</NavLink> 
      </nav>
      { cards }
    </main>
  )
}

