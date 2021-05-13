import React from 'react'
import './show-card.styles.scss'
import  {ReactComponent as Arrow} from '../../assets/Arrow.svg';
import  {ReactComponent as Ticket} from '../../assets/Ticket.svg';
import  {ReactComponent as TicketFilled} from '../../assets/Ticketfill.svg';

const ShowCard = (props)=>{
    const [hover,setHover]=React.useState(false)
    return(
        <div className="show-card">
            <div className="show-card-container">
                <div className="artist-image" style={{background:`url("${props.image}")`,backgroundSize:"cover", backgroundPosition:"center"}}></div>
                <div className="artist-info">
                    <div className="category"><p>{props.category}</p></div>
                    <div className="name"><p>{props.name}</p></div>
                    <div className="ticket-info">
                        <p>More Info <Arrow style={{width:"18px",paddingTop:"4px"}}/></p>
                        <span className="ticket" onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>
                            {hover ?
                            <TicketFilled/>:
                            <Ticket/>}
                        </span>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowCard