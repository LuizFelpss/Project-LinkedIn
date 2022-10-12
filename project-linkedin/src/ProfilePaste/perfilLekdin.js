import './Perfprofile.css';
function PerfilLink() {
    return (
        <div>
            <body className="Box-geral">
                <div className="Box-header">
                    <header className="Box-PerfilP">
                        <div>
                            <img className='Img-capa' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMwZigZ-t3pYvo5IWMphNPJ-GeSSFxRuLfDg&usqp=CAU" alt="fundo"></img>
                        </div>
                        <div className='Name-pronome'>
                            <h1>Nome do Usuario</h1>
                            <span>Pronome</span>
                        </div>
                        <h3>Cargo</h3>
                        <span> Local</span>
                        <a href="google.com">Informações de contato</a>
                        <span>8.532 seguidores.+ de 500 conexões</span>
                        <div>
                            <button>Tenho interesse em...</button>
                            <button>Adicionar seção do perfil</button>
                            <button>Mais</button>
                        </div>
                    <section>
                        <p><strong>Buscando emprego</strong>
                            Cargos de Desenvolvedor da web </p>
                        <p>Ver todos os detalhes</p>
                    </section>
                    </header>
                    <div>
                        <article>
                            <div>
                                <h2><span>Sugestôes para você</span></h2>
                                <span>Exibido apenas para você</span>
                            </div>
                            <div>
                                <div>
                                    <span>Intermediário</span>
                                    <div>
                                        <progress value="70" max="100">70 %</progress>
                                    </div>
                                    <div>
                                        <span>Conclua 1 etapa para alcançar o nível de perfil</span>
                                        <a href="">Campeão</a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </body>
        </div>
    )
}
export default PerfilLink;