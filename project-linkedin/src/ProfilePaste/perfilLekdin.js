import './Perfprofile.css';
import {FaLinkedin} from 'react-icons/fa'
import {BiPencil} from "react-icons/bi"
import {AiFillCamera} from 'react-icons/ai'
import {IoEyeSharp} from 'react-icons/io'
function PerfilLink() {
    return (
        <div>
            <body className="Box-geral">
                <div className="Box-header">
                    <header className="Box-PerfilP">
                        <div>
                            <img className='Img-capa' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMwZigZ-t3pYvo5IWMphNPJ-GeSSFxRuLfDg&usqp=CAU" alt="fundo"></img>
                        </div>
                            <AiFillCamera className='Icone-cam'/>
                        <img className='Foto-Profile' src="https://media-exp1.licdn.com/dms/image/C4D03AQGMGNOxrLAAdw/profile-displayphoto-shrink_400_400/0/1663178513720?e=1671062400&v=beta&t=jHdT08CNLrojzNeom5DBo6S-eV5ZKPyr9y6BJAbt8GQ" alt='foto de perfil'></img>
                        <div className='Box-tudoerrado'>
                            <div className='Name-pronome'>
                                <h1>Luiz Felipe</h1>
                                <span>(Ele)</span>
                            </div>
                            <FaLinkedin className='Icone-Premium'/>
                            <BiPencil className='Icone-pencil'/>
                            <div className='Box-carglo'>
                                <h4>Desenvolvedor Full-Stack Java | Git-Github</h4>
                                <span className='Ender-inf'> Camaragibe, Pernambuco, Brasil </span>
                                <a className='Contact' href="google.com">Informações de contato</a>
                                <span className='Conect'>8.532 seguidores.+ de 500 conexões</span>
                            </div>
                            <div className='Box-bottom'>
                                <button className='Bottons-pro'>Tenho interesse em...</button>
                                <button className='Bottons-pro2'>Adicionar seção do perfil</button>
                                <button className='Bottons-pro3'>Mais</button>
                            </div>
                            <section className='Section-empre'>
                                <p className='Section-p'><strong>Demonstre aos recrutadores que você está buscando emprego;</strong>
                                    você controla quem pode ver isso.   <a className='Section-a' href='nolink'>Comece já</a>  </p>

                            </section>
                        </div>
                    </header>
                    <div className='box-Sugestions'>
                        <article>
                            <div>
                                <h2><span>Sugestôes para você</span></h2>
                                <span>Exibido apenas para você</span>
                            </div>
                            <div>
                                <div>
                                    <span>Intermediário</span>
                                    <div>
                                        <progress value="70" max="100">70%</progress>
                                    </div>
                                    <div>
                                        <span>Conclua 1 etapa para alcançar o nível de perfil</span>
                                        <a href="">Campeão</a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <footer className='Rodape'>
                        <ul className='List-rodape'>
                            <ol className='Par-rodape'>Sobre</ol>
                            <ol className='Par-rodape'>Diretrizes da Comunidade</ol>
                            <ol className='Par-rodape'>Termos e Privacidade</ol>
                            <ol className='Par-rodape'>Soluções de Vendas</ol>
                            <ol className='Par-rodape'>Central de Segurança</ol>
                        </ul>
                        <ul>
                            <ol className='Par-rodape2'>Acessibilidade</ol>
                            <ol className='Par-rodape2'>Carreiras</ol>
                            <ol className='Par-rodape2'>Preferências de anúncios</ol>
                            <ol className='Par-rodape2'>Para celular</ol>
                        </ul>
                        <ul>
                            <ol className='Par-rodape3'>Soluções de talentos</ol>
                            <ol className='Par-rodape3'>Soluções de Marketing</ol>
                            <ol className='Par-rodape3'>Publicidade</ol>
                            <ol className='Par-rodape3'>Pequenas empresas</ol>
                        </ul>
                    </footer>
                </div>
            </body>
        </div>
    )
}
export default PerfilLink;