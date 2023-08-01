import React from 'react';
import './App.css';
import GifList from './Components/GifList';
import GifForm from './Components/GifForm';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchStart } from './actions/index';

function App(props) {
  const { loading, error, fetchStart } = props;

  useEffect(() => {
    fetchStart();
  }, []);

  return (
    <div className="App">
      <h1>Search for Gifs</h1>

      <GifForm />

      {
        (error !== "") && <h3>{error}</h3>
      }


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


export default connect(mapStateToProps, { fetchStart })(App);