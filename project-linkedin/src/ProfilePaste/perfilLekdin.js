function PerfilLink() {
    return (
        <div>
            <header>

                <div>
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
            </header>
            <section>
                <p><strong>Buscando emprego</strong>
                    Cargos de Desenvolvedor da web </p>
                <p>Ver todos os detalhes</p>
            </section>
        </div>
    )
}
export default PerfilLink;