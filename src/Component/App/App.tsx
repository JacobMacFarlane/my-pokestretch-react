import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import { cleanData } from '../../utilites';
import { Header } from '../Header/Header';
import './App.css';
import PokemonCard from '../Card/PokemonCard';

export type PokeCard = {
  image: string
  name : string,
  types: string[]
  cardId: string
}

function App() {
  const [allCards, setCards] = useState([])
  const [favorites, setFavorites] = useState<PokeCard[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
 
  const fetchAllCards = async () => {
    try {
      
      const response = await fetch('https://api.pokemontcg.io/v2/cards/');
        if (response.ok) {
          let data  = await response.json();
          data = cleanData(data.data)
          setCards(data);
          setLoading(false)
        } else {
          throw new Error()
        }
    }
    catch (error) {
      console.error('Error:', error);
    }
  }
  const chooseCard = ( pokemon: any ) => {
    const newFavState = [...favorites, pokemon]
    setFavorites(newFavState)
    console.log(favorites, 'this is favorites!!')
    console.log(allCards, 'allcards')
   }
  useEffect(()=> {
    fetchAllCards()
  }, [] )

  return (
    <section className='main'>
      <Header />
      {loading && <div className='loading-text'>Loading...</div>}

      <Switch> 
        <Route exact path='/' render={(props : {}) => <Main data={ allCards } chooseCard={chooseCard}/> }/>
        <Route exact path='/favorites' render={(props : {}) => <Main data={ favorites } chooseCard={chooseCard}/> }/>
      </Switch>
    </section>
  );
}

export default App;
