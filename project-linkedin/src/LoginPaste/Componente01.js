import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './loginEst.css';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

export default function Login() {
  return (
    <div>
      <body className="App">
        <header className="H">
          <h1 >
            Linked
              <BsLinkedin className="Icon-Linkedin" />
          </h1>
        </header>

        <div className="Card_layout">
          <div>
            <p className="Hearder_text">Entrar</p>

            <p class="Inicio02">
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

          <div class="ou">
            <p>______________________ ou ______________________</p>
          </div>

          <div>
            <button className="Btt_Google">
              <b >
                <FcGoogle className="Icon-Google" />
              </b>{' '}
              <b className="Google-Letra"> Entrar com o Google </b>{' '}
            </button>
          </div>

          <div>
            <button className="Btt_Apple">
              <b className="Icon-Apple">
                <AiFillApple />
              </b>{' '}
              <b className="Apple-Letra">Entrar com a Apple</b>{' '}
            </button>

          </div>
        </div>

        <div className="Cadastrar">
          <p class="NovoLinkedin">
            {' '}
            Novo no LinkedIn?
            <a className="Cadastrar1" href=" ">
              Cadastre-se
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