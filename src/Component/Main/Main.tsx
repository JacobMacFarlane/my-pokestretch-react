import React from "react";
import PokemonCard from "../Card/PokemonCard";

interface MainProps {
  data : Object[]
}


export const Main = (props : MainProps) => {
  console.log(props)
  const cards = props.data.map((pokemon : object) => {
    return <PokemonCard card={ pokemon } />
  })

  return (
    <main>
      { cards }
    </main>
  )
}

