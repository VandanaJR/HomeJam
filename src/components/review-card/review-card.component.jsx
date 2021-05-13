import React from 'react'
import './review-card.styles.scss'
import {ReactComponent as FlagUS} from '../../assets/united-states.svg'


const ReviewCard = (props)=>{
    const [hover,setHover]=React.useState(false)
    return(
        <div className="review-card">
            <div className="review-card-container">
                <div className="reviewer">
                    <div className="reviewer-photo" style={{background:`url("${props.image}")`,backgroundSize:"cover", backgroundPosition:"center"}}></div> 
                    <div className="reviewer-info">
                        <div className="rev-name">{props.name}</div>
                        <div className="rev-location">
                            <FlagUS style={{width:"24px",height:"24px"}}/>
                            <div className="rev-country">{props.location}</div>
                        </div>
                        
                    </div>
                </div>

                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.</p>
                </div>
              
            </div>
        </div>
    )
}

export default ReviewCard