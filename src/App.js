import React from 'react';
import './App.css';
import GifList from './Components/GifList';
import GifForm from './Components/GifForm';
import { connect } from 'react-redux';

function App(props) {
  const { loading, error } = props;

  if (error !== "") {
    return <h3>{error}</h3>
  }
  return (
    <div className="App">
      <h1>Search for Gifs</h1>

      <GifForm />

      {
        loading ? <h3>We are loading</h3> : <GifList />
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(App);