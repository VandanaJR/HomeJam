import React from 'react';
import './App.scss';
import Intro from './components/intro/intro.component'
import Reviews from './components/reviews/reviews.component';
import Shows from './components/shows/shows.component'


function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <Shows></Shows>
      <Reviews></Reviews>
    </div>
  );
}

export default App;
