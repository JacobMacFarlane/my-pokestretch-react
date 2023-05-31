import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import PokemonCard from '../Card/PokemonCard';
import { PokeCard } from '../App/App';
import './Main.css';

interface MainProps {
  data: PokeCard[];
  chooseCard: any;
}

export const Main: FC<MainProps> = (props) => {
  const cards: JSX.Element[] = props.data.map
  ((pokemon: PokeCard, index: number) => {
    return (
      <PokemonCard
        key={pokemon.cardId}
        card={pokemon}
        chooseCard={props.chooseCard}
      />
    );
  });

  return (
    <main className="main-container">
      <nav>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
      {cards}
    </main>
  );
};
