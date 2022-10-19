import './styles.css'

import CreateIcon from '@mui/icons-material/Create';
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import InputIcon from './InputIcon';
import React, {useState} from 'react'
import Posts from '../Posts/posts'
import {AiTwotoneLike} from 'react-icons/ai';
import {BiHeartCircle} from 'react-icons/bi';
import {FaHandsWash} from 'react-icons/fa';


var post = [
    {foto:"https://media-exp1.licdn.com/dms/image/C4D03AQFlwgcNI7OOTw/profile-displayphoto-shrink_100_100/0/1663890367551?e=1671062400&v=beta&t=44CuI7H9B76XLDMnkuJvlA_9Ml3KCssQ-5qqSI28hl0",
     nome:"Artur Leone",
     prox:"1º",
     cargo:"Cursando Análise e Desenvolvimento de Sistemas | DEV WEB Java Instituto PROA",
     tempo:"1 m",
     texto:"Nesta tarde, eu e os alunos do Instituto PROA tivemos uma incrível aula sobre o Linkedin, contamos com a presença dos especialistas Denise Maia e Eduardo Casella, no qual nos passaram excelentes dicas de funções e usabilidade.",
     imagem:"https://media-exp1.licdn.com/dms/image/C4D22AQEnBcMV1Qiihg/feedshare-shrink_1280/0/1663207580496?e=1668643200&v=beta&t=-AkibhlwiRTZqX450uHiED1FYpJ46A8jRoNp8qV4eR8",
     reacaoA: <AiTwotoneLike/>,
     reacaoB: <BiHeartCircle/>,
     reacaoC: <FaHandsWash/>,
     likes:"600",
     comentarios:"20 comentários"
    },
    {foto:"https://media-exp1.licdn.com/dms/image/D5635AQEORE4dwZhGUw/profile-framedphoto-shrink_800_800/0/1661351076373?e=1666702800&v=beta&t=TmgRBkHG-t4xKWyADfqfHlzliqdCm3hQZmBjOZ9QmO4",
     nome: "Felipe Felix",
     prox:"1º",
     cargo:"Desenvolvedor Web | CSS | JavaScript | SQL Server | SQL Oracle",
     tempo:"10m",
     texto:"Projeto desenvolvido no evento Next Level Week (NLW) da Rocketseat.",
     imagem:"https://media-exp1.licdn.com/dms/image/C4D22AQEhN9ODOhO3og/feedshare-shrink_2048_1536/0/1663291794985?e=1669248000&v=beta&t=2z2mPjb5rhKXn2nvBB61NgBXrs4wmFk7l1AyWSYuq5g",
     reacaoA: <FaHandsWash/>,
     reacaoB: <BiHeartCircle/>,
     reacaoC: <AiTwotoneLike/>,
     likes:"270",
     comentarios:"34 comentários"
    }
  ]


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
        
        {post.map((dado) => (<Posts foto={dado.foto} nome={dado.nome} prox={dado.prox} cargo={dado.cargo} tempo={dado.tempo} texto={dado.texto} imagem={dado.imagem} reacaoA={dado.reacaoA} reacaoB={dado.reacaoB} reacaoC={dado.reacaoC} likes={dado.likes} comentarios={dado.comentarios}/>))}   
    </div>
  )
}

export default Feed
