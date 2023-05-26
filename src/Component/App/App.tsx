import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main } from '../Main/Main';

import './App.css';

function App() {
  const [allCards, setCards] = useState([])
  const [favorites, setFavorites] = useState([])


  return (
    <main>
      <h1>Foo</h1>
      <Switch> 
        <Route exact path='/' render={(props : any) => <Main data={allCards} /> }/>
        <Route exact path='/favorites' render={(props : any) => <Main data={favorites} /> }/>

      </Switch>
    </main>
  );
}

export default App;
