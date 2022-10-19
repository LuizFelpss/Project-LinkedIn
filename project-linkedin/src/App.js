import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navegador from './navRotas';
import PerfilLink from './ProfilePaste/perfilLekdin';
import Sidebar from './FeedPaste/sidebar';
import Feed from './FeedPaste/Feed';
import Widgets from './FeedPaste/Widgets';
import Header from './FeedPaste/Header';
import Rotss from './SystemRots';
import Menu from './MainPaste/menuslinkedin'
import Logando from './LoginPaste/linkedinlogin'

function App() {
  return (
    <div>

      <div>
        <Router>
          <Routes>
            <Route exact path='/' element={<Logando/>}></Route>
            <Route path='/SystemRots' element={<Rotss />}/>
            <Route path='/perfil' element={<PerfilLink />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
