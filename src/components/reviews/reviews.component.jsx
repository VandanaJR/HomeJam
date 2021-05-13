import React from 'react'
//import './shows.styles.scss'

import Slider from "react-slick"
import ReviewCard from '../review-card/review-card.component'



const Reviews=()=>{
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },

          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1.8,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1
            }
          },
         

          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1.2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 1.1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 390,
            settings: {
              slidesToShow: 1.08,
              slidesToScroll: 1
            }
          }
        ]
      }
    return(
        <div className="shows" style={{paddingTop:"60px"}}>
            <div className="show-title">
                <div className="section">
                <p>Reviews</p>
                <div className="line"></div>
                
            </div>
            </div>
            <div className="slider">
            <Slider {...settings}>
                <div>
                <span>
                <ReviewCard 
                image="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                name="Hellen Jummy"
                location="PALO ALTO, CA"></ReviewCard></span>
                </div>
                <div>
                <span><ReviewCard 
                image="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                name="Isaac Oluwatemilorun"
                location="PALO ALTO, CA"></ReviewCard></span>
                </div>
                <div>
                <span><ReviewCard 
                image="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                name="Hellen Jummy"
                location="PALO ALTO, CA"></ReviewCard></span>
                </div>
                <div>
                <span><ReviewCard 
                image="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                name="Isaac Oluwatemilorun"
                location="PALO ALTO, CA"></ReviewCard></span>
                </div>

              </Slider>
           
            </div>
            
        </div>
    )
}

export default Reviews