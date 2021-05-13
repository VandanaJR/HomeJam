import React from 'react'
import './shows.styles.scss'
import ShowCard from '../show-card/show-card.component'
import Slider from "react-slick"


const Shows=()=>{
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 930,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },

          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1
            }
          },

          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1.2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 390,
            settings: {
              slidesToShow: 1.1,
              slidesToScroll: 1
            }
          }
        ]
      }
    return(
        <div className="shows">
            <div className="show-title">
                <div className="section">
                <p>Upcoming Shows</p>
                <div className="line"></div>
                
            </div>
            <p className="view-all">View All</p> 
            </div>
            <div className="slider">
            <Slider {...settings}>
                <div>
                <span><ShowCard image='https://superstarsbio.com/wp-content/uploads/2018/09/Benny-Dayal-1.jpg' category="Folk" name="Benny Dayal"></ShowCard></span>
                </div>
                <div>
                <span><ShowCard image='http://www.chiranjeeviblog.com/wp-content/uploads/2019/11/22tvf_vijay.jpg' category="Bollywood" name="Vijay Yesudas"></ShowCard></span>
                </div>
                <div>
                <span><ShowCard image='https://www.filmibeat.com/img/2019/08/c-032-1565590568.jpg' category="Folk" name="Andrea Jeremaih"></ShowCard></span>
                </div>
                <div>
                <span><ShowCard image='https://www.bizasialive.com/wp/wp-content/uploads/2020/11/Shilpa-Rao-1200x.jpg' category="Folk" name="Shilpa Rao"></ShowCard></span>
                </div>
              </Slider>
           
            </div>
            
        </div>
    )
}

export default Shows