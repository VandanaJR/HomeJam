import React from 'react';
import './intro.styles.scss';
import ProgressBar from '../progress-bar/progress-bar.component'
import Slider from "react-slick"



const IntroProgressBar=()=> {
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1030,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },

          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1
            }
          }
        ]
      }
  return (
      

            <div className="intro-progress-bar">
              {/* <span> <ProgressBar likes="456" percent="66"></ProgressBar></span>
              <span><ProgressBar likes="0" percent="0"></ProgressBar></span>
              <span><ProgressBar likes="0" percent="0"></ProgressBar></span>
              <span><ProgressBar likes="0" percent="0"></ProgressBar></span> */}
              <Slider {...settings}>
                <div>
                <span> <ProgressBar likes="456" percent="66"></ProgressBar></span>
                </div>
                <div>
                <span><ProgressBar likes="0" percent="0"></ProgressBar></span>
                </div>
                <div>
                <span><ProgressBar likes="0" percent="0"></ProgressBar></span>
                </div>
                <div>
                <span><ProgressBar likes="0" percent="0"></ProgressBar></span>
                </div>
              </Slider>
            </div>
           
        



  );
}



export default IntroProgressBar;