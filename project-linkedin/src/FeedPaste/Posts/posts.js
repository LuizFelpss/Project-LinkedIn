import "./style.css"
import { GoKebabHorizontal } from 'react-icons/go'
import { RiEarthLine } from 'react-icons/ri'
import { BsRecordFill } from 'react-icons/bs'
import { BsChatText } from 'react-icons/bs'
import { RiShareForwardBoxLine } from 'react-icons/ri'
import { FaLocationArrow } from 'react-icons/fa'
import { BiLike } from 'react-icons/bi'

//Publicações feitas por Artur Leone

export default function Posts(props) {
    return (
        <div className="postagens">
            <section>
                <div className="topo"> </div>
                <div className="pontos">
                    <GoKebabHorizontal />
                </div>

                <div className="dados">

                    <span className="fotos">
                        <img src={props.foto} />
                    </span>

                   

                    <span className="nomeProx">
                        <h2>{props.nome}</h2>

                        <p><BsRecordFill /> {props.prox}</p>
                    </span>
                    <p className="cargo">{props.cargo}</p>
                    <p className="tempoMund"> <span className="tempo"> {props.tempo} <BsRecordFill /></span> <RiEarthLine /></p> 
                    
                </div>

                <div className="texto">
                    <p>{props.texto}</p>
                </div>

                <img className="imagens" src={props.imagem} />

                <div className="reação">
                    <span className="reaçãoA">{props.reacaoA}</span>
                    <span className="reaçãoB">{props.reacaoB}</span>
                    <span className="reaçãoC">{props.reacaoC}</span>
                    <p>{props.likes}</p>
                    <span className="comentarios"> <p>{props.comentarios}</p> </span>

                </div>


                <div className="interação">
                    <p className="like"><BiLike /> Gostei</p>
                    <p><BsChatText /> Comentar</p>
                    <p><RiShareForwardBoxLine /> Compartilhar</p>
                    <p><FaLocationArrow /> Enviar</p>
                </div>
            </section>
        </div>
    )
}