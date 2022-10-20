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

//Publicações feitas por Artur Leone
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
    },
    {foto:"https://media-exp1.licdn.com/dms/image/D4D35AQF05LNBj0LJoQ/profile-framedphoto-shrink_100_100/0/1662774472610?e=1666828800&v=beta&t=fkuQN5eD8M4lIhpo86XqFFCaM68SawE9YjKCkZ_z8uo",
     nome: "Mateus Abdias",
     prox:"1º",
     cargo:"Aluno na Universidade Federal Rural de Pernambuco",
     tempo:"2d",
     texto:"Olá rede, bom dia! Semana passada me dediquei nesse projeto, o desafio dessa vez foi fazer um app de clima, e vim compartilhar com vocês os resultados.",
     imagem:"https://media-exp1.licdn.com/dms/image/sync/C4D27AQFqTtb2LdgwRA/articleshare-shrink_800/0/1666017184350?e=1666828800&v=beta&t=6FXHbSmKPwpbVrRJ1R-VLZrH9gomPsndm55wEvTVfyI",
     reacaoA: <BiHeartCircle/>,
     reacaoB: <FaHandsWash/>,
     reacaoC: <AiTwotoneLike/>,
     likes:"243",
     comentarios:"22 comentários"
    },
    {foto:"https://media-exp1.licdn.com/dms/image/D4D03AQEoZi5RPTOoqA/profile-displayphoto-shrink_100_100/0/1663179055057?e=1671667200&v=beta&t=7r_IVVzxV9xdaq5umfAubCQtjDQIQjS0LaoHNcPnwmg",
     nome: "Vitória Albuquerque",
     prox:"1º",
     cargo:"Desenvolvedora Web Java en formação | HTML | CSS | Javascript | React",
     tempo:"2d",
     texto:"Fala galera! Hoje, eu e meus colegas de curso do Instituto PROA tivemos uma experiência incrível fazendo uma visita ao Sistema Jornal do Commercio de Comunicação. Tivemos uma tarde sensacional conhecendo as dependências do local, e a equipe que faz toda a TV Jornal acontecer no dia a dia. Foi um momento enriquecedor e de muito aprendizado que levaremos pro resto das nossas vidas! 😍",
     imagem:"https://media-exp1.licdn.com/dms/image/C4D22AQGfKvSoEEg9uw/feedshare-shrink_800/0/1663892870448?e=1669248000&v=beta&t=6eavngVFUB_y8aJ-_pNm9qThf4-2neh09NxJZHrTlp8",
     reacaoA: <BiHeartCircle/>,
     reacaoB: <AiTwotoneLike/>,
     reacaoC: <FaHandsWash/>,
     likes:"240",
     comentarios:"27 comentários",
    },
    {foto:"https://media-exp1.licdn.com/dms/image/C4D03AQEKMuPrFLh9Rw/profile-displayphoto-shrink_100_100/0/1624896092025?e=1671667200&v=beta&t=n_u-UZNRWAn9SldXjVR3PE7SU4eOyQpiRq06kNNZx-g",
     nome: "Isabelle Victoria Pereira",
     prox:"2º",
     cargo:"Software Developer | JavaScript | ReactJs | Python | MySQL | Java |",
     tempo:"2 sem",
     texto:"É com os olhinhos brilhando e com o coração completamente grato que hoje compartilho com vocês que na última semana iniciei a minha jornada com a F1RST Tecnologia, a qual entrei através do programa Code Girls! 🤩",
     imagem:"https://media-exp1.licdn.com/dms/image/C4D22AQGDmB91R46oWw/feedshare-shrink_800/0/1664919433999?e=1669248000&v=beta&t=Ewcm4GyNKk3DgRgNWofCEmBETNFKiQRaZn0TBnrNDhE",
     reacaoA: <AiTwotoneLike/>,
     reacaoB: <BiHeartCircle/>,
     reacaoC: <FaHandsWash/>,
     likes:"230",
     comentarios:"30 comentários",
    },
    {foto:"https://media-exp1.licdn.com/dms/image/C4D03AQE_5jqYCO32kA/profile-displayphoto-shrink_100_100/0/1663879736668?e=1671667200&v=beta&t=sFtep7GYcUfPqNZjh6FMPEa1VIElODb4BilQgoYMjV4",
     nome: "Denise Maia",
     prox:"2º",
     cargo:"Contribuo com empresas que atuam no B2B na conquista de leads",
     tempo:"1 d",
     texto:"Em novembro acontece mais uma edição do Workshop LinkedIn Carreira e Negócios promovido pela APP Brasil - Associação dos Profissionais de Propaganda. ",
     imagem:"https://media-exp1.licdn.com/dms/image/C4D22AQE-NuI7HlNfiQ/feedshare-shrink_2048_1536/0/1666118304279?e=1669248000&v=beta&t=NY0DgcoAwEYXr2777L_gtdCiTvemq_JUWEjjCd5c490",
     reacaoA: <AiTwotoneLike/>,
     reacaoB: <BiHeartCircle/>,
     reacaoC: <FaHandsWash/>,
     likes:"120",
     comentarios:"14 comentários",
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
