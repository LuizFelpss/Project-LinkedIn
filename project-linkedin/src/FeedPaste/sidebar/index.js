import React from 'react'
import './styles.css'
import { Avatar} from "@mui/material"
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom' 




const Sidebar = () => {
  return (
    <div className="sidebar">
     
      <div className="sidebar__top">
         <img src="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/150401-tv-feature-harry-potter-image1-vpdnsqfrou.jpg" alt=""/>
      
      <Avatar className="sidebar__avatar"/>
        
      <Link to='/Perfil'><h3>Felipe Felix 
      </h3></Link>
      <h4>Desenvolvedor Web | CSS | JavaScript | SQL Server | SQL Oracle | Python | Java | React | Angular | Git👨🏻‍💻 💡</h4>
      <div className="sidebar__contents">
        <div className="sidebar__cont">
            <p>Quem viu seu perfil</p>
            
            <p>80</p>
        </div>
        <div className="sidebar__cont">
        <p>
           <a href="http://localhost:3000/Perfil">
               Acesse ferramentas e estatísticas<br/>
               exclusivas <br/>
               {""}
               <b>Seja contratado mais rápido Tente Premium libre</b> {""}
           </a>
        </p>
        </div>
        <div className="sidebar__cont">
            <div className="sidebar__marcadores">
            <TurnedInIcon className="sidebar__icons"/>
            <p>Meus itens</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar