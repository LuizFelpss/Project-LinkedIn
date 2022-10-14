import './styles.css'

import CreateIcon from '@mui/icons-material/Create';
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import InputIcon from './InputIcon';
import React, {useState} from 'react'
const Feed = () => {
    const [input, setInput] = useState('')

     const sendPost = e => {
         e.preventDefault()

         setInput('')
     }

  return (
    <div className="feed">
        
        <div className="feed__containerInput">
            <div className="feed__input">
            <CreateIcon className="feed__input_icon"/>
                <form>
                    <input 
                    type="text" 
                    placeholder="Começar publicação" 
                    value={input} 
                    onChange={e => setInput(e.target.value)}
                    />
                    <button onClick={sendPost} type="submit">Enviar</button>
                </form>
            </div>
            <div className="feed__inputIcon">
        <InputIcon Icon={PhotoIcon}
        title='Foto'
        color= '#70b5f9'/>
        <InputIcon Icon={YouTubeIcon}
        title='Video'
        color= '#7fc15e'/>
        <InputIcon Icon={EventIcon}
        title='Evento'
        color= '#e7a33e'/>
        <InputIcon Icon={VerticalSplitIcon}
        title='Escrever artigo'
        color= '#f5987e'/>
        </div>
        </div>
        
    </div>
  )
}

export default Feed
