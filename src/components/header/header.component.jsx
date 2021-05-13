import React from 'react';
import './header.styles.scss'
import SideNav from '../sidenav/sidenav.component'
import  {ReactComponent as HomeJamLogo} from '../../assets/Logo.svg';
import  {ReactComponent as SearchLogo} from '../../assets/searchLogo.svg';
import  {ReactComponent as BasketLogo} from '../../assets/Basket.svg';
import Button from '@material-ui/core/Button';



const Header = ()=>{
  
  return (
    
    <div className="header-container" >
      <div className="logo-container">
        <HomeJamLogo className="logo"></HomeJamLogo>
      </div>
      
     
      <div className="browser-header">
        <Button color="inherit"><SearchLogo style={{margin: "0 10px"}}/><span style={{color:"white",fontFamily: "'Open Sans', sans-serif",textTransform:"none"}}>Search</span></Button>
        <Button color="inherit"><span style={{color:"white",fontFamily: "'Open Sans', sans-serif",textTransform:"none"}}>Help</span></Button>
        <Button color="inherit"><span style={{color:"white",fontFamily: "'Open Sans', sans-serif",textTransform:"none"}}>Account</span></Button>
        <Button color="inherit"><BasketLogo/></Button>
      </div>
    
      <div className="mobile-header">
        <Button color="inherit"><SearchLogo/></Button>
        <Button color="inherit"><BasketLogo/></Button>
        <SideNav></SideNav>
      </div>

   
    </div>
  );
}

export default Header

