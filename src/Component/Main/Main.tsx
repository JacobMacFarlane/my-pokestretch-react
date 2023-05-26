import React from "react";
import PokemonCard from "../Card/PokemonCard";

// type PokeCard = {
//   card : {
//     images: {
//         large : string
//     }
//     name : string,
//     types: string[]
    
//   }
// }

interface MainProps {
  data : Object[]
}

export const Main: React.FC<MainProps>  = (props : MainProps) => {
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

