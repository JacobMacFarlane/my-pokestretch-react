import React, { FC } from 'react';
import { PokemonCard } from '../Card/PokemonCard';
import { PokeCard } from '../App/App';
import './Main.css';

interface MainProps {
  data: PokeCard[];
  chooseCard: (pokemon: PokeCard)=> void;
  removeFavorite: (card: PokeCard)=> void;
}

export const Main: FC<MainProps> = (props: MainProps) => {
  const cards: JSX.Element[] = props.data.map
  ((pokemon: PokeCard) => {
    return (
      <PokemonCard
        key={pokemon.cardId}
        card={pokemon}
        chooseCard={props.chooseCard}
        removeFavorite={props.removeFavorite}
      />
    );
  });

  return (
    <main className="main-container">
      {cards}
    </main>
  );
};
