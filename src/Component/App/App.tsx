import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Main } from '../Main/Main';

import './App.css';

interface PokeCard {
    id: string
    images: {
      large:string
    }
    name: string
    types: string[]
}
const App: React.FunctionComponent<{}> = () => {
  const [allCards, setCards] = useState<PokeCard[]>([])
  const [favorites, setFavorites] = useState<PokeCard[]>([])
  const [error, setError] = useState<string>('')

  const fetchAllCards = async () => {
    try {
      const response = await fetch('https://api.pokemontcg.io/v2/cards/');
        if (response.ok) {
          const data: { data: PokeCard[] }  = await response.json();
          setCards(data.data);
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
    console.log(allCards, 'look here')
  }, [] )

  return (
    
    <section>
     
      <header>
        <h1>Foo</h1>
      </header>
      <Switch>
        <Route path='/' component={() => <Main data={allCards} />} />
        {/* <Route exact path='/favorites' render={(props : any) => <Main /> }/> */}
      </Switch>
    </section>
  );
}

export default App;
