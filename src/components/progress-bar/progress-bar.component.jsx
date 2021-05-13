import { CircularProgressbarWithChildren, buildStyles }  from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './progress-bar.styles.scss'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import IconButton from '@material-ui/core/IconButton'
import  {ReactComponent as CalendarLogo} from '../../assets/Calendar.svg'

const ProgressBar=(props)=>{
    const percentage = props.percent
    return(
        <div className="progress-bar-container">
            <CircularProgressbarWithChildren 
            value={percentage} 
            styles={buildStyles({
                textColor: "white",
                pathColor: "#DD4CAC",
                trailColor: "rgba(255, 255, 255, 0.3)",
            })}
            strokeWidth={1}
            >
                {props.likes == 0 ? 
                <CalendarLogo style={{cursor:"pointer"}}></CalendarLogo>
                 :
                 <IconButton style={{ margin: '0 0'}}>
                    <FavoriteBorderIcon style={{ color: 'blue', width:"32px",height:"32px",cursor:"pointer"}}></FavoriteBorderIcon>
                 </IconButton>}
                <p style={{ color: 'white',fontSize:"24px",padding:"10px 0 ",fontFamily:"'Libre Baskerville', serif" }} >{props.likes}</p>
                <p style={{ color: 'rgba(255, 255, 255, 0.5)',fontSize:"15px",fontFamily:"'Nunito', sans-serif"}} >Likes</p>
            
            </CircularProgressbarWithChildren>
        </div>
    
    )
}

export default ProgressBar
