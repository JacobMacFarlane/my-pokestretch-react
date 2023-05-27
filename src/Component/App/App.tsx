import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import { cleanData, PokeCard } from '../../utilites';

import './App.css';
import PokemonCard from '../Card/PokemonCard';

function App() {
  const [allCards, setCards] = useState([])
  const [favorites, setFavorites] = useState([])
  const [error, setError] = useState('')

  const fetchAllCards = async () => {
    try {
      const response = await fetch('https://api.pokemontcg.io/v2/cards/');
        if (response.ok) {
          let data  = await response.json();
          data = cleanData(data.data)
          setCards(data);
        } else {
          throw new Error()
        }
    }
    catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(()=> {
    fetchAllCards()
  }, [] )

  return (
    <section>
      <header>
        <h1>Foo</h1>
      </header>
      <Switch> 
        <Route exact path='/' render={(props : any) => <Main data={ allCards } /> }/>
        {/* <Route exact path='/favorites' render={(props : any) => <Main /> }/> */}
      </Switch>
    </section>
  );
}

export default App;
