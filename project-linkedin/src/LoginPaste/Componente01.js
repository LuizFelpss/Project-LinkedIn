import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './loginEst.css';
export default function Login() {
  return (
    <div className="Principal">
      <body>
        <header></header>

        <div className="Card_layout">
          <div className="Hearder_text">
            <h1 className="Hearder_text">Entrar</h1>

            <p>
              Acompanhe as novidades do seu mundo <br></br>profissional.
            </p>

            <br></br>
          </div>

          <div className="Input">
            <input
              className="Input_email"
              type="text"
              placeholder="E-mail ou telefone"
            ></input>

            <br></br>
            <br></br>

            <input
              className="Input_senha"
              type="text"
              placeholder="Senha"
            ></input>
            <br></br>

            <br></br>
          </div>

          <a className="Pergunta_Esqueceu" href="">
            Esqueceu a senha?
          </a>

          <div className="Button_entrar">
            <Link to='/SystemRots'>
            <button className="Btt_Entrar">
              <b> Entrar </b>
            </button>
            </Link>
          </div>

          <div className="Google_Apple">
            <p> ________________ ou ________________</p>
            <button className="Btt_Google">
              <b> Entrar com o Google </b>{' '}
            </button>
            <br></br> <br></br>
            <button className="Btt_Apple">
              <b> Entrar com a Apple</b>{' '}
            </button>
            <br></br> <br></br>
          </div>
        </div>

        <div className="Cadastrar">
          <p>
            Novo no LinkdIn?
            <a className="Cadastrar1" href="">
              <b>Cadastre-se</b>
            </a>
          </p>
        </div>

        <footer>
          <ul>
            <a className="Footer" href="">
              {' '}
              Contrato do Usuário
            </a>
            <a className="Footer" href="">
              {' '}
              Política de Privacidade do LinkedIn
            </a>
            <a className="Footer" href="">
              Diretrizes da Comunidade
            </a>
            <a className="Footer" href="">
              Política de Cookies
            </a>
            <a className="Footer" href="">
              {' '}
              Política de Direitos Autorais
            </a>
            <a className="Footer" href="">
              {' '}
              Enviar feedback
            </a>
            Idioma
          </ul>
        </footer>
      </body>
    </div>
  );
}
