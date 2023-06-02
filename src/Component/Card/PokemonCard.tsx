import React, { useState } from 'react';
import { PokeCard } from '../App/App';
import './PokemonCard.css';
import stamp from '../../assets/stamp.png';

type CardProps = {
  card: PokeCard;
  chooseCard: (PokeCard: PokeCard) => void;
  removeFavorite: (card: PokeCard) => void;
};

export const PokemonCard: React.FC<CardProps> = (props: CardProps) => {
  const [favorited, setFavorite] = useState(false);
  const { card, chooseCard, removeFavorite } = props;

  const handleEvent = () => {
    if (!favorited) {
      setFavorite(true);
      chooseCard(card);
    } else {
      removeFavorite(card);
      setFavorite(false);
    }
  };

  return (
    <section className="single-card-container">
      {favorited && (
        <div className="card-and-stamp">
          <img className="stamp" src={stamp} />
          <img src={card.image} alt={card.name} className="card-img" />
        </div>
      )}

      {!favorited && (
        <img src={card.image} alt={card.name} className="card-img" />
      )}

      <div className="cardInfo">
        <h1 className="title">{card.name}</h1>
        <p className="type">{card.types}</p>
      </div>

      <button
        className="favorite-button"
        name={card.name}
        onClick={() => handleEvent()}
      >
        {favorited ? 'Unfavorite' : 'Favorite'}
      </button>
    </section>
  );
};
