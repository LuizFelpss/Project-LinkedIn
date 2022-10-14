import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom' 
import Navegador from './navRotas';
import PerfilLink from './ProfilePaste/perfilLekdin';
import Sidebar from './FeedPaste/sidebar';
import Feed from './FeedPaste/Feed';

function App() {
  return (
    <div className="App">
      <Router>
      <Navegador/>
         <Routes>
           <Route path='/Perfil' element={<PerfilLink/>}/>
         </Routes>
       </Router>
      <div className="wrapper">
      <Sidebar/>

      <Feed/>
      </div>
    </div>
  );
}

export default App;
