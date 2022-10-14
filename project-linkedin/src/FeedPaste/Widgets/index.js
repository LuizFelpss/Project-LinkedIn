import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './styles.css'

const Widgets = () => { 

const Articulos = (title, subtitle) => {
    return (
        <div className="widgets__article">
            <div className="widgets__left">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__right">
                <h4>{title}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

  return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>LinkedIn Notícias</h2>
            <InfoIcon/>
        </div>
    {Articulos("Eleições 2022: últimas notícias", "Lula vence o 2º turno e é novamente o presidente do Brasil")}
    {Articulos("Eleições 2022: últimas notícias", "Lula vence o 2º turno e é novamente o presidente do Brasil")}
    {Articulos("Eleições 2022: últimas notícias", "Lula vence o 2º turno e é novamente o presidente do Brasil")}
    


    </div>
  )
}

export default Widgets
