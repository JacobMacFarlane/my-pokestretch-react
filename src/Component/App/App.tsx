import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import { cleanData, PokeCard } from '../../utilites';

import './App.css';
import PokemonCard from '../Card/PokemonCard';

function App() {
  const [allCards, setCards] = useState([])
  const [favorites, setFavorites] = useState <PokeCard[]>([])
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
        console.log(allCards, 'in app')
    }
    catch (error) {
      console.error('Error:', error);
    }
  }
 const chooseCard = ( pokemon: PokeCard ) => {
  const newFavState = [...favorites, pokemon]
  setFavorites(newFavState)
  console.log(favorites, 'this is favorites!!')
 }
  useEffect(()=> {
    fetchAllCards()
  }, [] )

  return (
      // <Header />

    <section>
      {loading && <div className='loading-text'>Loading...</div>}
      <Switch> 
        <Route exact path='/' render={(props : {}) => <Main data={ allCards } chooseCard={chooseCard} /> }/>
        {/* <Route exact path='/favorites' render={(props : any) => <Main /> }/> */}
      </Switch>
    </section>
  );
}

export default App;

// create error componenet w/ return button
// css
// form component
// cypress