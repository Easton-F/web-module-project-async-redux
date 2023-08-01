import React from 'react';
import './App.css';
import GifList from './Components/GifList';
import data from './data/gifs';
import GifForm from './Components/GifForm';

function App(props) {
  const gifs = data;
  const loading = false;
  const error = "";

  return (
    <div className="App">
      <h1>Search for Gifs</h1>

      <GifForm />

      {
        loading ? <h3>We are loading</h3> : <GifList gifs={gifs}/>
      }
    </div>
  );
}

export default App;