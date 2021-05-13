import React from 'react'
import './intro.styles.scss'
import Header from '../header/header.component'
import IntroProgressBar from './intro-progress-bar'


const Intro=()=> {
  return (

      <div className="intro">
        <Header></Header>
          <div className="intro-body">
            <div className="intro-text">
              <h1>Cari Cari</h1>
              <p>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
            </div>
            <IntroProgressBar></IntroProgressBar>
          </div>
      </div>


  );
}

export default Intro;